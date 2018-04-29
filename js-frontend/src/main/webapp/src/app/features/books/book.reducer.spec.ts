import { reducer } from './book.reducer';
import * as fromBooks from './book.reducer';
import { SearchComplete, Load, Select } from './book.actions';
import { Book } from './book.models';
import { LoadSuccess } from './book-collection.actions';

describe('BooksReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromBooks.initialState);
    });
  });

  describe('SEARCH_COMPLETE & LOAD_SUCCESS', () => {
    function noExistingBooks(action: any) {
      const book1 = { id: '111' } as Book;
      const book2 = { id: '222' } as Book;
      const createAction = new action([book1, book2]);

      const expectedResult: any = {
        ids: ['111', '222'],
        entities: {
          '111': book1,
          '222': book2,
        },
        selectedBookId: null,
      };

      const result = reducer(fromBooks.initialState, createAction);
      expect(result).toEqual(expectedResult);
    }

    function existingBooks(action: any) {
      const book1 = { id: '111' } as Book;
      const book2 = { id: '222' } as Book;
      const initialState: any = {
        ids: ['111', '222'],
        entities: {
          '111': book1,
          '222': book2,
        },
        selectedBookId: null,
      };
      // should not replace existing books
      const differentBook2 = { id: '222', foo: 'bar' } as any;
      const book3 = { id: '333' } as Book;
      const createAction = new action([book3, differentBook2]);

      const expectedResult: any = {
        ids: ['111', '222', '333'],
        entities: {
          '111': book1,
          '222': book2,
          '333': book3,
        },
        selectedBookId: null,
      };

      const result = reducer(initialState, createAction);
      expect(result).toEqual(expectedResult);
    }

    it('should add all books in the payload when none exist', () => {
      noExistingBooks(SearchComplete);
      noExistingBooks(LoadSuccess);
    });

    it('should add only new books when books already exist', () => {
      existingBooks(SearchComplete);
      existingBooks(LoadSuccess);
    });
  });

  describe('LOAD', () => {
    it('should add a single book, if the book does not exist', () => {
      const book = { id: '888' } as Book;
      const action = new Load(book);

      const expectedResult: any = {
        ids: ['888'],
        entities: {
          '888': book,
        },
        selectedBookId: null,
      };

      const result = reducer(fromBooks.initialState, action);
      expect(result).toEqual(expectedResult);
    });

    it('should return the existing state if the book exists', () => {
      const initialState: any = {
        ids: ['999'],
        entities: {
          '999': { id: '999' },
        },
      };
      const book: any = { id: '999', foo: 'baz' };
      const action = new Load(book);

      const result = reducer(initialState, action);
      expect(result).toEqual(initialState);
    });
  });

  describe('SELECT', () => {
    it('should set the selected book id on the state', () => {
      const action = new Select('1');

      const result = reducer(fromBooks.initialState, action);
      expect(result.selectedBookId).toBe('1');
    });
  });

  describe('Selections', () => {
    const book1 = { id: '111' } as Book;
    const book2 = { id: '222' } as Book;
    const state: fromBooks.State = {
      ids: ['111', '222'],
      entities: {
        '111': book1,
        '222': book2,
      },
      selectedBookId: '111',
    };

    describe('getEntities', () => {
      it('should return entities', () => {
        const result = fromBooks.getBookEntities(state);
        expect(result).toBe(state.entities);
      });
    });

    describe('getIds', () => {
      it('should return ids', () => {
        const result = fromBooks.getBookIds(state);
        expect(result).toBe(state.ids);
      });
    });

    describe('getSelectedId', () => {
      it('should return the selected id', () => {
        const result = fromBooks.getSelectedBookId(state);
        expect(result).toBe('111');
      });
    });

    describe('getSelected', () => {
      it('should return the selected book', () => {
        const result = fromBooks.getSelectedBook(state);
        expect(result).toBe(book1);
      });
    });

    describe('getAll', () => {
      it('should return all books as an array ', () => {
        const result = fromBooks.getAllBooks(state);
        expect(result).toEqual([book1, book2]);
      });
    });
  });
});
