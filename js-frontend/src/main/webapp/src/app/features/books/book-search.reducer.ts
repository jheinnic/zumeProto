import * as BookActions from './book.actions';

export interface State {
  ids: string[];
  loading: boolean;
  query: string;
}

export const initialState: State = {
  ids: [],
  loading: false,
  query: '',
};

export function reducer(state = initialState, action: BookActions.ActionType): State {
  switch (action.type) {
    case BookActions.SEARCH: {
      const query = action.payload;

      if (query === '') {
        return {
          ids: [],
          loading: false,
          query,
        };
      }

      return {
        ...state,
        query,
        loading: true,
      };
    }

    case BookActions.SEARCH_COMPLETE: {
      return {
        ids: action.payload.map(book => book.id),
        loading: false,
        query: state.query,
      };
    }

    default: {
      return state;
    }
  }
}

export const getIds = (state: State) => state.ids;
export const getQuery = (state: State) => state.query;
export const getLoading = (state: State) => state.loading;
