/*
 * Copyright 2017 ebondu and/or its affiliates
 * and other contributors as indicated by the @author tags.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/operator/map';
import 'rxjs/operator/filter';
import 'rxjs/operator/catch';
import {Store} from '@ngrx/store';
import * as KeycloakAuthorization from './keycloak-authz';
import {CoreAuthzActions, CoreReducer} from '../feature';
import {LRUMap} from 'lru_map';
import {KeycloakInternalHelper} from './keycloak-internal-helper.interface';
import {API_GATEWAY_URL} from '../../../environments/environment.all';

export const URL_TO_RTP_LRU_CACHE =
  new InjectionToken<LRUMap<string, KeycloakAuthorization.KeycloakAuthorizationInstance>>(
    'URL_TO_RTP_LRU_CACHE');

/**
 * An Angular http proxy supporting Keycloak auth & authz.
 * Authenticate user, manage tokens and add authorization header to access to remote Keycloak protected
 * resources.
 */
@Injectable()
export class KeycloakHttpInterceptor implements HttpInterceptor, KeycloakInternalHelper
{
  private readonly MAX_UNAUTHORIZED_ATTEMPTS = 2;

  private authzFactory: KeycloakAuthorization.KeycloakAuthorizationFactory;

  private keycloakInst: Keycloak.KeycloakInstance;

  constructor(
    private readonly store: Store<CoreReducer.State>,
    @Inject(API_GATEWAY_URL) private readonly apiGatewayUrl: string,
    // @Inject(URL_TO_RTP_LRU_CACHE) private readonly lruCache: LRUMap<string,
    // KeycloakAuthorization.KeycloakAuthorizationInstance>)
  )
  {
  }

  injectKeycloakAdapter(keycloakInst: Keycloak.KeycloakInstance): void
  {
    this.keycloakInst = keycloakInst;
    const authzFactory: KeycloakAuthorization.KeycloakAuthorizationFactory =
      KeycloakAuthorization(this.keycloakInst);
    const subscription = authzFactory.isReady()
      .filter(value => value)
      .take(1)
      .subscribe(
        isReady => {
          this.authzFactory = authzFactory;
          this.store.dispatch(new CoreAuthzActions.AuthorizationReady());
        }
      );
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    let nextRequest = req;
    if (req.url.startsWith(this.apiGatewayUrl)) {
      const clonedRequest = req.clone({
        headers: req.headers.set(
          'Authorization',
          'bearer ' + this.keycloakInst.token
        )
      });
      console.log('new headers', clonedRequest.headers.keys());
      nextRequest = clonedRequest;
    }

    return next.handle(nextRequest);
  }
}
