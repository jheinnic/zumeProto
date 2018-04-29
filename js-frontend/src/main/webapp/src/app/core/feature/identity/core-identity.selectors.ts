import {createSelector} from '@ngrx/store/public_api';
import * as Models from './core-identity.models';

type State = Models.State;
type SessionTokenStatus = Models.SessionTokenStatus;
type ActivityContext = Models.ActivityContext;
type HasTokenContext = Models.HasTokenContext;
type LoggedInContext = Models.LoggedInContext;

export const isAuthentClientReady = (state: State) =>
  state && state.authentClientState === Models.AuthentClientStatus.Connected;

export const isKeycloakClientSelected = (state: State) =>
  state && state.selectedClientName !== undefined && state.selectedClientName !== null;

export const isUiAvailable = (state: State) => state && state.isUiAvailable;

export const getIdentityErrorMessage = (state: State) => (state ? state.errorDetail.displayMessage : undefined);

export const hasIdentityErrorMessage = (state: State) =>
  state && state.errorDetail.errorCause !== noFailure && state.errorDetail.errorCause !== pending;

export const currentIdentityActivityContext = (state: State) =>
  state ? state.activityContext : undefined;

export const currentIdentityActivityMode =
  createSelector(
    currentIdentityActivityContext,
    (activityContext: ActivityContext) => activityContext ? activityContext.activityMode : undefined
  );

export const isAnonymous =
  createSelector(
    currentIdentityActivityMode,
    (activityMode: Models.ActivityMode) => activityMode === anonymous);

export const hasSessionToken =
  createSelector(
    currentIdentityActivityContext,
    (activityContext: ActivityContext) => hasSessionCookie(activityContext)
  );

export const currentHasTokenActivityContext =
  createSelector(
    currentIdentityActivityContext, hasSessionToken,
    (activityContext: ActivityContext, hasTokenContext: boolean) => hasTokenContext
      ? activityContext as HasTokenContext
      : undefined);

export const sessionTokenStatus =
  createSelector(
    currentHasTokenActivityContext,
    (activityContext: HasTokenContext) => activityContext ? activityContext.tokenStatus : undefined);

export const hasValidLogin =
  createSelector(sessionTokenStatus, (tokenStatus: SessionTokenStatus) => tokenStatus === valid);

export const hasInvalidLogin =
  createSelector(
    sessionTokenStatus,
    (tokenStatus: SessionTokenStatus) => tokenStatus && tokenStatus !== valid
  );

export const hasExpiredLogin =
  createSelector(sessionTokenStatus, (tokenStatus: SessionTokenStatus) => tokenStatus === expired);

export const hasRevokedLogin =
  createSelector(sessionTokenStatus, (tokenStatus: SessionTokenStatus) => tokenStatus === revoked);

export const hasMalformedLogin =
  createSelector(sessionTokenStatus, (tokenStatus: SessionTokenStatus) => tokenStatus === malformed);

export const hasUnverifiedLogin =
  createSelector(sessionTokenStatus, (tokenStatus: SessionTokenStatus) => tokenStatus === unknown);

// Reasoning here goes that if we end up logged out without having transitioned to the "logout" activity
// mode, then we were involuntarily logged out.  E.g. session revocation, expiration, or third party logout.
// export const wasLogoutPlanned =
//   createSelector(activityModeInProgress, activityMode => activityMode === loggingOut);

// TODO: Address retries
export const isUserProfileLoaded =
  createSelector(
    currentIdentityActivityMode,
    (activityMode: Models.ActivityMode) => activityMode === loggedIn);

export const getUserProfile =
  createSelector(
    currentHasTokenActivityContext, isUserProfileLoaded,
    (activityContext: HasTokenContext, profileLoaded: boolean) =>
      profileLoaded ? (activityContext as LoggedInContext).userProfile : undefined);

const noFailure = Models.ErrorCause.NoFailure;
const pending = Models.ErrorCause.Pending;
const valid = Models.SessionTokenStatus.Authenticated;
const expired = Models.SessionTokenStatus.Expired;
const revoked = Models.SessionTokenStatus.Revoked;
const malformed = Models.SessionTokenStatus.Malformed;
const unknown = Models.SessionTokenStatus.Unknown;
const anonymous = Models.ActivityMode.Anonymous;
const loggedIn = Models.ActivityMode.LoggedIn;
const loadingProfile = Models.ActivityMode.LoadingProfile;
const loggingOut = Models.ActivityMode.LoggingOut;

function hasSessionCookie(context: ActivityContext): context is HasTokenContext
{
  return context && (context.activityMode === loadingProfile || context.activityMode === loggedIn
    || context.activityMode === loggingOut);
}


