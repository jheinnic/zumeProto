import * as CoreIdentityActions from './identity/core-identity.actions';
import * as CoreIdentityModels from './identity/core-identity.models';
import * as CoreIdentityReducer from './identity/core-identity.reducer';

export {CoreIdentityActions};
export {CoreIdentityModels};
export {CoreIdentityReducer};
export * from './identity/core-identity.effects';

import * as CoreAuthzActions from './authz/core-authz.actions';
import * as CoreAuthzModels from './authz/core-authz.models';
import * as CoreAuthzReducer from './authz/core-authz.reducer';

export {CoreAuthzActions};
export {CoreAuthzModels};
export {CoreAuthzReducer};
export * from './authz/core-authz.effects';

import * as CoreLayoutActions from './layout/core-layout.actions';
import * as CoreLayoutModels from './layout/core-layout.models';
import * as CoreLayoutReducer from './layout/core-layout.reducer';

export {CoreLayoutActions};
export {CoreLayoutModels};
export {CoreLayoutReducer};
// export * from './layout/core-layout.effects';

import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export namespace CoreReducer
{
  export interface State
  {
    layout: CoreLayoutReducer.State;
    identity: CoreIdentityReducer.State;
    authz: CoreAuthzReducer.State;
  }

  export const featureKey = 'core';

  export const reducerMap: ActionReducerMap<State> = {
    layout: CoreLayoutReducer.reducer,
    identity: CoreIdentityReducer.reducer,
    authz: CoreAuthzReducer.reducer
  };

  export const initialState: State = {
    layout: CoreLayoutReducer.initialState,
    identity: CoreIdentityReducer.initialState,
    authz: CoreAuthzReducer.initialState
  };

  export const reducerOptions = {
    initialState: initialState
  };


  export const selectCoreFeatureState = createFeatureSelector<State>(featureKey);

  /* Identity Sub-Feature Selectors */

  export const selectFromIdentityState =
    createSelector(selectCoreFeatureState, (state: State) => { return state.identity });

  export const isAuthentClientReady =
    createSelector(selectFromIdentityState, CoreIdentityReducer.isAuthentClientReady);

  export const isKeycloakClientSelected =
    createSelector(selectFromIdentityState, CoreIdentityReducer.isKeycloakClientSelected);

  export const isUiAvailable =
    createSelector(selectFromIdentityState, CoreIdentityReducer.isUiAvailable);

  export const hasIdentityErrorMessage =
    createSelector(selectFromIdentityState, CoreIdentityReducer.hasIdentityErrorMessage);

  export const getIdentityErrorMessage =
    createSelector(selectFromIdentityState, CoreIdentityReducer.getIdentityErrorMessage);

  export const currentIdentityActivityContext =
    createSelector(selectFromIdentityState, CoreIdentityReducer.currentIdentityActivityContext);

  export const currentIdentityActivityMode =
    createSelector(selectFromIdentityState, CoreIdentityReducer.currentIdentityActivityMode);

  export const isAnonymous =
    createSelector(selectFromIdentityState, CoreIdentityReducer.isAnonymous);

  export const hasSessionToken =
    createSelector(selectFromIdentityState, CoreIdentityReducer.hasSessionToken);

  export const currentHasTokenActivityContext =
    createSelector(selectFromIdentityState, CoreIdentityReducer.currentHasTokenActivityContext);

  export const sessionTokenStatus =
    createSelector(selectFromIdentityState, CoreIdentityReducer.sessionTokenStatus);

  export const hasValidLogin =
    createSelector(selectFromIdentityState, CoreIdentityReducer.hasValidLogin);

  export const hasInvalidLogin =
    createSelector(selectFromIdentityState, CoreIdentityReducer.hasInvalidLogin);

  export const hasExpiredLogin =
    createSelector(selectFromIdentityState, CoreIdentityReducer.hasExpiredLogin);

  export const hasRevokedLogin =
    createSelector(selectFromIdentityState, CoreIdentityReducer.hasRevokedLogin);

  export const hasMalformedLogin =
    createSelector(selectFromIdentityState, CoreIdentityReducer.hasMalformedLogin);

  export const hasUnverifiedLogin =
    createSelector(selectFromIdentityState, CoreIdentityReducer.hasUnverifiedLogin);

  export const isUserProfileLoaded =
    createSelector(selectFromIdentityState, CoreIdentityReducer.isUserProfileLoaded);

  export const getUserProfile =
    createSelector(selectFromIdentityState, CoreIdentityReducer.getUserProfile);

  /* Authorization Sub-Feature Selectors */

  export const selectFromAuthzState =
    createSelector(selectCoreFeatureState, (state: State) => { return state.authz });

  export const isAuthzFactoryReady =
    createSelector(selectFromAuthzState, CoreAuthzReducer.isAuthzFactoryReady);

  /* Core Layout Selectors */

  export const selectFromLayoutState =
    createSelector(selectCoreFeatureState, (state: State) => { return state.layout });

  export const isUIAvailable =
    createSelector(selectFromLayoutState, CoreLayoutReducer.isUIAvailable);

  export const getBrandData =
    createSelector(selectFromLayoutState, CoreLayoutReducer.getBrandData);

  export const getNavItems =
    createSelector(selectFromLayoutState, CoreLayoutReducer.getNavItems);

  export const getNavStyle =
    createSelector(selectFromLayoutState, CoreLayoutReducer.getNavStyle);

  export const isNavMenuShown =
    createSelector(selectFromLayoutState, CoreLayoutReducer.isNavMenuShown);

  export const isSideNavShown =
    createSelector(selectFromLayoutState, CoreLayoutReducer.isSideNavShown);
}

