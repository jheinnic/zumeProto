import * as BookCollectionActions from './book-collection.actions';

export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}

export const initialState: State = {
  loaded: false,
  loading: false,
  ids: [],
};

export function reducer(state = initialState,
                        action: BookCollectionActions.ActionType): State {
  switch (action.type) {
    case BookCollectionActions.LOAD: {
      return Object.assign({}, state, {
        loading: true,
      });
    }

    case BookCollectionActions.LOAD_SUCCESS: {
      const books = action.payload;

      return {
        loaded: true,
        loading: false,
        ids: books.map(book => book.id),
      };
    }

    case BookCollectionActions.ADD_BOOK_SUCCESS:
    case BookCollectionActions.REMOVE_BOOK_FAIL: {
      const book = action.payload;

      if (state.ids.indexOf(book.id) > -1) {
        return state;
      }

      return Object.assign({}, state, {
        ids: [...state.ids, book.id],
      });
    }

    case BookCollectionActions.REMOVE_BOOK_SUCCESS:
    case BookCollectionActions.ADD_BOOK_FAIL: {
      const book = action.payload;

      return Object.assign({}, state, {
        ids: state.ids.filter(id => id !== book.id),
      });
    }

    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getIds = (state: State) => state.ids;
