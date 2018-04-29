import * as GqlToyDomainActions from './domain/gqltoy-domain.actions';
import * as GqlToyDomainModels from './domain/gqltoy-domain.models';
import * as GqlToyDomainReducer from './domain/gqltoy-domain.reducer';

export {GqlToyDomainActions};
export {GqlToyDomainModels};
export {GqlToyDomainReducer};
export * from './domain/gqltoy-domain.effects';

import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export namespace GqlToyReducer
{
  export interface State
  {
    domain: GqlToyDomainReducer.State;
  }

  export const featureKey = 'gqltoy';

  export const reducerMap: ActionReducerMap<State> = {
    domain: GqlToyDomainReducer.reducer
  };

  export const initialState: State = {
    domain: GqlToyDomainReducer.initialState
  };

  export const reducerOptions = {
    initialState: initialState
  };


  export const selectGqlToyFeatureState = createFeatureSelector<State>(featureKey);

  /* Identity Sub-Feature Selectors */

  export const selectFromDomainState =
    createSelector(selectGqlToyFeatureState, (state: State) => { return state.domain });
}
