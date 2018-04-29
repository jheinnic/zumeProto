// import {Models.AuthentActivityMode, BootstrapErrorType} from './authent-client.models';
// import {AccessTokenStatus, RefreshTokenStatus, UserInfoStatus} from './feature/client/client.model';
import * as Models from './gqltoy-domain.models';
import * as Actions from './gqltoy-domain.actions';

export * from './gqltoy-domain.selectors';

export type State = Models.State;

export const initialState: State = {
  authzFactoryState: Models.AuthorizationFactoryStatus.Disconnected,
  lastAccessCheck: undefined
};

export function reducer(state = initialState, action: Actions.ActionType): State
{
  switch (action.type) {
    // case Actions.BOOTSTRAP_AUTHORIZATION:
    // {
    //   return state;
    // }

    case Actions.AUTHORIZATION_READY:
    {
      return {
        ...state,
        authzFactoryState: Models.AuthorizationFactoryStatus.Connected
      };
    }

    default:
    {
      return state;
    }
  }
}

