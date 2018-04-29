import {Action} from '@ngrx/store';
import {KeycloakProfile} from 'keycloak-js';
import * as uuid from 'uuid';

import * as Models from './core-authz.models';

// export const BOOTSTRAP_AUTHORIZATION = '(Authentication UI) Select Keycloak Client';
export const AUTHORIZATION_READY = '(Authorization Service) Authorization Bootstrap Complete';


// export class BootstrapAuthorization implements Action
// {
//   readonly type = BOOTSTRAP_AUTHORIZATION;
//
//   constructor(public readonly payload: Models.KeycloakClient) { }
// }

export class AuthorizationReady implements Action
{
  readonly type = AUTHORIZATION_READY;
}

export type ActionType =
  // BootstrapAuthorization |
  AuthorizationReady;

