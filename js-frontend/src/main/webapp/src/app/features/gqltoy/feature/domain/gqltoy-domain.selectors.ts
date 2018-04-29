import {createSelector} from '@ngrx/store/public_api';
import * as Models from './gqltoy-domain.models';

type State = Models.State;

export const isAuthzFactoryReady = (state: State) =>
  state && state.authzFactoryState === Models.AuthorizationFactoryStatus.Connected;

