import * as actions from './actions';

export function apolloReducer(
  state = {},
  action: actions.Actions
) {
  switch (action.type) {
    case actions.WRITE_STORE: {
      console.log('ngrx WRITE', action.payload);
      return {
        ...action.payload
      };
    }
    default: return state;
  }
}
