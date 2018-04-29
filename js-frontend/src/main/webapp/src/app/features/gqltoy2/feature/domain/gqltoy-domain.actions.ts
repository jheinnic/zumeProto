import {Action} from '@ngrx/store';

import * as Models from './gqltoy-domain.models';

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

