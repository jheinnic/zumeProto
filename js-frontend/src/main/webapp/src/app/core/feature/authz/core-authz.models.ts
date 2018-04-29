import {KeycloakProfile} from 'keycloak-js';

export enum AuthorizationFactoryStatus
{
  Disconnected, Connected
}

// TODO: Common Models?  Flexible or closely coupled evolution?
export enum AccessDecision
{
  Granted, Pending, Denied, Error, Unknown
}

// TODO: Common Models?  Flexible or closely coupled evolution?
export interface AccessCheckResult
{
  readonly decision: AccessDecision;
  readonly resource: string;
  readonly displayMessage?: string;
}

export interface State
{
  authzFactoryState: AuthorizationFactoryStatus;
  lastAccessCheck?: AccessCheckResult
}
