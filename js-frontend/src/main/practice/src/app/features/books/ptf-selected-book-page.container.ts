import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromBooks from './book-feature.reducer';
import * as collection from './book-collection.actions';
import { Book } from './book.models';

@Component({
  selector: 'ptf-selected-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ptf-book-detail
      [book]="book$ | async"
      [inCollection]="isSelectedBookInCollection$ | async"
      (add)="addToCollection($event)"
      (remove)="removeFromCollection($event)">
    </ptf-book-detail>
  `,
})
export class SelectedBookPageComponent {
  book$: Observable<Book>;
  isSelectedBookInCollection$: Observable<boolean>;

  constructor(private store: Store<fromBooks.State>) {
    this.book$ = store.select(fromBooks.getSelectedBook);
    this.isSelectedBookInCollection$ = store.select(
      fromBooks.isSelectedBookInCollection
    );
  }

  addToCollection(book: Book) {
    this.store.dispatch(new collection.AddBook(book));
  }

  removeFromCollection(book: Book) {
    this.store.dispatch(new collection.RemoveBook(book));
  }
}
