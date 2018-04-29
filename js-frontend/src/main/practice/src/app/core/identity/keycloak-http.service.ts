// /*
//  * Copyright 2017 ebondu and/or its affiliates
//  * and other contributors as indicated by the @author tags.
//  *
//  * Licensed under the Apache License, Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  * http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  */
//
// import {Inject, Injectable, InjectionToken} from '@angular/core';
// import {
//   ConnectionBackend, Headers, Http, Request, RequestMethod, RequestOptions, RequestOptionsArgs, Response
// } from '@angular/http';
//
// import {Observable} from 'rxjs/Rx';
// import 'rxjs/operator/map';
// import 'rxjs/operator/filter';
// import 'rxjs/operator/catch';
// import {Store} from '@ngrx/store';
//
// import * as Keycloak from 'keycloak-js';
// import * as KeycloakAuthorization from './keycloak-authz';
// import {KeycloakRegistry} from './keycloak-registry.service';
// import {CoreAuthorizeActions, CoreReducer} from '../feature';
// import {LRUMap} from 'lru_map';
//
// export const URL_TO_RTP_LRU_CACHE =
//   new InjectionToken<LRUMap<string, KeycloakAuthorization.KeycloakAuthorizationInstance>>(
//     'URL_TO_RTP_LRU_CACHE');
//
// /**
//  * An Angular http proxy supporting Keycloak auth & authz.
//  * Authenticate user, manage tokens and add authorization header to access to remote Keycloak protected
//  * resources.
//  */
// @Injectable()
// export class KeycloakHttp extends Http
// {
//   // Observable on service status.
//   // If true, keycloakHttp is ready to handle requests
//   // private readyObs: Observable<boolean>;
//   // private readonly http: Http;
//
//   private readonly MAX_UNAUTHORIZED_ATTEMPTS = 2;
//
//   private authzFactory: KeycloakAuthorization.KeycloakAuthorizationFactory;
//
//   constructor(
//     backend: ConnectionBackend,
//     defaultOptions: RequestOptions,
//     private readonly keycloak: KeycloakRegistry,
//     private readonly store: Store<CoreReducer.State>,
//     @Inject(URL_TO_RTP_LRU_CACHE) private readonly lruCache: LRUMap<string, KeycloakAuthorization.KeycloakAuthorizationInstance>)
//   {
//     super(backend, defaultOptions);
//     // this.http = new Http(backend, defaultOptions);
//   }
//
//   init(): void
//   {
//     const authzFactory = KeycloakAuthorization(this.keycloak);
//     const subscription = authzFactory.ready()
//       .filter(value => value)
//       .take(1)
//       .subscribe(
//         isReady => {
//           this.authzFactory = authzFactory;
//           this.store.dispatch(new CoreAuthorizeActions.AuthorizationReady());
//           subscription.unsubscribe();
//         }
//       );
//   }
//
//   get(url: string, options?: RequestOptionsArgs): Observable<Response>
//   {
//     // console.info("GET");
//     options = options || {withCredentials: false};
//     options.method = RequestMethod.Get;
//     return this.configureRequest(url, 1, options);
//   }
//
//   post(
//     url: string,
//     body: string,
//     options?: RequestOptionsArgs): Observable<Response>
//   {
//     options = options || {withCredentials: false};
//     options.method = RequestMethod.Post;
//     options.body = body;
//     return this.configureRequest(url, 1, options);
//   }
//
//   put(
//     url: string,
//     body: string,
//     options?: RequestOptionsArgs): Observable<Response>
//   {
//     options = options || {withCredentials: false};
//     options.method = RequestMethod.Put;
//     options.body = body;
//     return this.configureRequest(url, 1, options);
//   }
//
//   delete(url: string, options?: RequestOptionsArgs): Observable<Response>
//   {
//     options = options || {withCredentials: false};
//     options.method = RequestMethod.Delete;
//     return this.configureRequest(url, 1, options);
//   }
//
//   patch(
//     url: string,
//     body: string,
//     options?: RequestOptionsArgs): Observable<Response>
//   {
//     options = options || {withCredentials: false};
//     options.method = RequestMethod.Patch;
//     options.body = body;
//     return this.configureRequest(url, 1, options);
//   }
//
//   head(url: string, options?: RequestOptionsArgs): Observable<Response>
//   {
//     options = options || {withCredentials: false};
//     options.method = RequestMethod.Head;
//     return this.configureRequest(url, 1, options);
//   }
//
//   private configureRequest(
//     url: string | Request,
//     count: number,
//     options?: RequestOptionsArgs): Observable<Response>
//   {
//     let authzInst: KeycloakAuthorization.KeycloakAuthorizationInstance;
//     // KeycloakAuthorization.initializedObs
//     //   .take(1)
//     //   .filter(init => init === true)
//     //   .subscribe(() => {
//     //     // console.info('KC_HTTP: this authz initialized...');
//     //   });
//     //
//     // Keycloak.initializedObs
//     //   .take(1)
//     //   .filter(init => init === true)
//     //   .subscribe(() => {
//     //     if (!Keycloak.authenticatedBehaviourSubject.getValue()) {
//     //       // console.info('KC_HTTP: this initialized, go login...');
//     //       this.keycloak.login(true);
//     //     }
//     //   });
//     // Keycloak.authenticatedObs.subscribe(() => {
//     //   // console.info('KC_HTTP: authentication done...');
//     //   KeycloakHttp.readyBehaviourSubject.next(true);
//     // });
//     //
//     // return KeycloakHttp.readyObs
//     //   .take(2)
//     //   .filter(ready => ready === true)
//     //   .flatMap(ready => {
//     //     // console.info('KC_HTTP: this is now http ready, re-attempting request...');
//     //     return this.configureRequest(url, count, options);
//     //   });
//     if (options && options.withCredentials) {
//       this.store.select(CoreReducer.hasValidLogin)
//         .filter(value => value)
//         .take(1)
//         .map(value => {
//           const token = this.keycloak.
//           if (!options.headers) {
//             options.headers = new Headers();
//           }
//           options.headers.set('Authorization', 'Bearer ' + token);
//         })
//       this.store.select(CoreReducer.isAuthzFactoryReady)
//         .filter(value => value)
//         .take(1)
//     } else {
//       // KC is ready, getting authorization header
//
//       return this.setHeaders(options)
//         .flatMap((opt: RequestOptionsArgs) => {
//           // console.info('KC_HTTP: using headers ' + options);
//           // calling http with headers
//           return super.request(url, opt)
//             .catch((error: any) => {
//               // error handling
//
//               Keycloak.authenticatedObs
//                 .take(2)
//                 .filter(auth => auth === true)
//               const status = error.status;
//               if (
//                 (status === 403 || status === 401) &&
//                 count < this.MAX_UNAUTHORIZED_ATTEMPTS
//               )
//               {
//                 // console.info('KC_HTTP: request is unauthorized!');
//                 if (error.url.indexOf('/authorize') === -1) {
//                   // auth error handling, observing for authorization
//                   return new Observable((observer: any) => {
//                     if (error.headers.get('WWW-Authenticate') !== null) {
//                       // requesting authorization to KC server
//                       this.keycloakAuth
//                         .authorize(error.headers.get('WWW-Authenticate'))
//                         .subscribe(token => {
//                           // notifying observers for authz result token
//                           observer.next(token);
//                         });
//                     } else {
//                       // console.warn('WWW-Authenticate header not found' +
//                       // error.headers.get('WWW-Authenticate'));
//                     }
//                   });
//                 } else {
//                   return Observable.throw(error.status);
//                 }
//               } else {
//                 return Observable.throw(error.status);
//               }
//             });
//         })
//         .flatMap(res => {
//           // Http Response or Authz token
//           if (res instanceof Response) {
//             // Http response
//             return new Observable<Response>((observer: any) =>
//               observer.next(res)
//             );
//           } else {
//             // Authorization token
//             this.keycloak.accessToken = res as any;
//             count = count + 1;
//             // retrying request with new token
//             // console.info('KC_HTTP: retrying request with new authorization token');
//             return this.configureRequest(url, count, options);
//           }
//         });
//     }
//   }
//
//   // to add 'Authorization' header
//   private setHeaders(
//     options?: RequestOptionsArgs): Observable<RequestOptionsArgs>
//   {
//     return new Observable<RequestOptionsArgs>((observer: any) => {
//       if (options && options.withCredentials) {
//         // console.info('adding headers with options ' + options);
//         let token = this.keycloak.accessToken;
//         if (this.keycloak.refreshToken) {
//           // console.info('checking token');
//           this.keycloak.updateToken(5)
//             .subscribe(res => {
//               token = res;
//               if (!options.headers) {
//                 options.headers = new Headers();
//               }
//               // console.info('returning an updated token');
//               options.headers.set('Authorization', 'Bearer ' + token);
//               observer.next(options);
//             });
//         } else {
//           if (!options.headers) {
//             options.headers = new Headers();
//           }
//           // console.info('returning the existing token ');
//           options.headers.set('Authorization', 'Bearer ' + token);
//           observer.next(options);
//         }
//       } else {
//         observer.next(options);
//       }
//     });
//   }
// }
