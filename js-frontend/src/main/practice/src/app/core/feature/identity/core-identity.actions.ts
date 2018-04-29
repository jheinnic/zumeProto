import {Action} from '@ngrx/store';
import {KeycloakProfile} from 'keycloak-js';
import * as uuid from 'uuid';

import * as Models from './core-identity.models';

export const BOOTSTRAP_AUTHENTICATION = '(Authentication UI) Select Keycloak Client';
export const AUTHENTICATION_READY = '(Authentication Service) Authentication Bootstrap Complete';

export const REDIRECT_TO_LOGIN = '(Authentication UI) Request Login';
export const RETURN_FROM_LOGIN = '(Authentication UI) Return From Login';
export const REDIRECT_TO_SIGNUP = '(Authentication UI) Request Signup';
export const RETURN_FROM_SIGNUP = '(Authentication UI) Return From Signup';
export const REDIRECT_TO_LOGOUT = '(Authentication UI) Request Logout';
export const RETURN_FROM_LOGOUT = '(Authentication UI) Return From Logout';

export const RETURN_TO_POST_AUTH_URL = '(Authentication UI) Request on-return redirection';
export const SET_POST_AUTH_URL = '(Authentication UI) Configure on-return redirection';

export const REQUEST_TOKEN_REFRESH = '(Authentication UI) Request Token Refresh';
export const RECEIVE_TOKEN_REFRESH = '(Authentication Service) Token Refresh Failed';
export const TOKEN_REFRESH_ERROR = '(Authentication Service) Token Refresh Failed';

export const REQUEST_USER_PROFILE = '(Authentication UI) Request User Profile Refresh';
export const RECEIVE_USER_PROFILE = '(Authentication Service) User Profile Fetched';
export const USER_PROFILE_ERROR = '(Authentication Service) User Profile Failed';

export const FIND_NO_TOKEN = '(Authentication Service) No access token';
export const FIND_VALID_TOKEN = '(Authentication Service) Valid access token';
export const FIND_EXPIRED_TOKEN = '(Authentication Service) Expired access token';
export const FIND_REVOKED_TOKEN = '(Authentication Service) Revoked access token';
export const FIND_MALFORMED_TOKEN = '(Authentication Service) Malformed access token';
export const PURGE_FAILED_SESSION = '(Authentication UI) Purge Session Tokens';

export const PROCESS_BOOTSTRAP_ERROR = '(Authentication Service) Bootstrap Failed';
export const PROCESS_LOGIN_ERROR = '(Authentication Service) Login Error found';
export const PROCESS_LOGOUT_ERROR = '(Authentication Service) Logout Failed';
export const PROCESS_SIGNUP_ERROR = '(Authentication Service) Signup Failed';


export class BootstrapAuthenticationClient implements Action
{
  readonly type = BOOTSTRAP_AUTHENTICATION;

  constructor(public readonly payload: Models.KeycloakClient) { }
}

export class AuthenticationReady implements Action
{
  readonly type = AUTHENTICATION_READY;
}

export class BootstrapError implements Action
{
  readonly type = PROCESS_BOOTSTRAP_ERROR;

  constructor(public readonly payload: Models.ErrorDetail) { }
}

export class RequestLoginRedirect implements Action
{
  readonly type = REDIRECT_TO_LOGIN;

  constructor(public payload: Models.LoginRedirectOptions) { }
}

export class ReturnFromLogin implements Action
{
  readonly type = RETURN_FROM_LOGIN;

  constructor(public readonly payload: Models.OnReturnUrlKey) { }
}

export class RequestLogoutRedirect implements Action
{
  readonly type = REDIRECT_TO_LOGOUT;

  constructor(public readonly payload: Models.OnReturnUrlValue) { }
}

export class RequestSignupRedirect implements Action
{
  readonly type = REDIRECT_TO_SIGNUP;


  constructor(public readonly payload: Models.OnReturnUrlValue) { }
}

export class ReturnToPostAuthUrl implements Action
{
  readonly type = RETURN_TO_POST_AUTH_URL;

  constructor(public readonly payload: Models.OnReturnUrlKey) { }
}

export class SetPostAuthUrl implements Action
{
  readonly type = SET_POST_AUTH_URL;

  public readonly payload: Models.OnReturnUrlDetail;

  constructor(onReturnRedirectUrl: string, activityMode: Models.ActivityMode)
  {
    this.payload = {
      uuid: uuid.v4(),
      onReturnRedirectUrl,
      activityMode
    }
  }
}

export class RequestUserProfile implements Action
{
  readonly type = REQUEST_USER_PROFILE;

  public readonly payload: { attemptsMade: number };

  constructor(attemptsMade: number = 0) {
    this.payload = { attemptsMade };
  }
}

export class RequestTokenRefresh implements Action
{
  readonly type = REQUEST_TOKEN_REFRESH;
}

export class FindSessionLoggedOut implements Action
{
  readonly type = FIND_NO_TOKEN;
}

export class FindSessionLoggedIn implements Action
{
  readonly type = FIND_VALID_TOKEN;
}

export class FindSessionExpired implements Action
{
  readonly type = FIND_EXPIRED_TOKEN;
}

export class FindSessionRevoked implements Action
{
  readonly type = FIND_REVOKED_TOKEN;
}

export class FindTokenMalformed implements Action
{
  readonly type = FIND_MALFORMED_TOKEN;
}

export class PurgeFailedSession implements Action
{
  readonly type = PURGE_FAILED_SESSION;
}

export class ProcessLoginError implements Action
{
  readonly type = PROCESS_LOGIN_ERROR;

  constructor(public payload: Models.ErrorDetail) { }
}

export class ProcessSignupError implements Action
{
  readonly type = PROCESS_SIGNUP_ERROR;

  constructor(public payload: Models.ErrorDetail) { }
}

export class ProcessLogoutError implements Action
{
  readonly type = PROCESS_LOGOUT_ERROR;

  constructor(public payload: Models.ErrorDetail) { }
}

export class ReceiveUserProfile implements Action
{
  readonly type = RECEIVE_USER_PROFILE;

  constructor(public payload: KeycloakProfile) { }
}

export class UserProfileError implements Action
{
  readonly type = USER_PROFILE_ERROR;

  constructor(public payload: Models.ErrorDetail) { }
}

export class ReceiveTokenRefresh implements Action
{
  readonly type = RECEIVE_TOKEN_REFRESH;
}

export class TokenRefreshError implements Action
{
  readonly type = TOKEN_REFRESH_ERROR;

  constructor(public payload: Models.ErrorDetail) { }
}


export type ActionType =
  BootstrapAuthenticationClient |
  AuthenticationReady |
  BootstrapError |
  RequestLoginRedirect |
  RequestLogoutRedirect |
  RequestSignupRedirect |
  ReturnToPostAuthUrl |
  SetPostAuthUrl |
  RequestUserProfile |
  PurgeFailedSession |
  FindSessionLoggedIn |
  FindSessionLoggedOut |
  FindSessionExpired |
  FindSessionRevoked |
  FindTokenMalformed |
  ProcessLoginError |
  ProcessSignupError |
  ProcessLogoutError |
  ReceiveUserProfile |
  UserProfileError |
  ReceiveTokenRefresh |
  TokenRefreshError;

