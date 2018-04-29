import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/of';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Database } from '@ngrx/db';

import * as BookCollectionActions from './book-collection.actions';
import { Book } from './book.models';

@Injectable()
export class CollectionEffects {
  /**
   * This effect does not yield any actions back to the store. Set
   * `dispatch` to false to hint to @ngrx/effects that it should
   * ignore any elements of this effect stream.
   *
   * The `defer` observable accepts an observable factory function
   * that is called when the observable is subscribed to.
   * Wrapping the database open call in `defer` makes
   * effect easier to test.
   */
  @Effect({ dispatch: false })
  openDB$: Observable<any> = Observable.defer(() => {
    return this.db.open('books_app');
  });

  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(BookCollectionActions.LOAD)
    .switchMap(() =>
      this.db
        .query('books')
        .toArray()
        .map((books: Book[]) => new BookCollectionActions.LoadSuccess(books))
        .catch(error => Observable.of(new BookCollectionActions.LoadFail(error)))
    );

  @Effect()
  addBookToCollection$: Observable<Action> = this.actions$
    .ofType(BookCollectionActions.ADD_BOOK)
    .map((action: BookCollectionActions.AddBook) => action.payload)
    .mergeMap(book =>
      this.db
        .insert('books', [book])
        .map(() => new BookCollectionActions.AddBookSuccess(book))
        .catch(() => Observable.of(new BookCollectionActions.AddBookFail(book)))
    );

  @Effect()
  removeBookFromCollection$: Observable<Action> = this.actions$
    .ofType(BookCollectionActions.REMOVE_BOOK)
    .map((action: BookCollectionActions.RemoveBook) => action.payload)
    .mergeMap(book =>
      this.db
        .executeWrite('books', 'delete', [book.id])
        .map(() => new BookCollectionActions.RemoveBookSuccess(book))
        .catch(() => Observable.of(new BookCollectionActions.RemoveBookFail(book)))
    );

  constructor(private actions$: Actions, private db: Database) {}
}
