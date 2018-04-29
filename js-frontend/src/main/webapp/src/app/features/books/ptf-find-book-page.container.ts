import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import * as fromBooks from './book-feature.reducer';
import * as book from './book.actions';
import {Book} from './book.models';

@Component({
  selector: 'ptf-find-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ptf-layout>
      <ptf-book-search ptf-main-header fxFlex="0 0 auto" [query]="searchQuery$ | async"
                       [searching]="loading$ | async" (search)="search($event)"></ptf-book-search>
      <ptf-book-preview-list ptf-main-body fxFlex="1 1 auto" fxLayout="row" fxLayoutAlign="center center"
                             fxLayoutWrap="true" [books]="books$ | async"></ptf-book-preview-list>
    </ptf-layout>
  `,
  styles: [
      `
      :host {
        flex: 1 1 100vw;
        flex-flow: column nowrap;
        align-items: stretch;
      }

      ptf-layout-component, :host {
        overflow: hidden;
      }

      ptf-book-preview-list {
        overflow: scroll;
      }
    `
  ]
})
export class FindBookPageComponent
{
  searchQuery$: Observable<string>;

  books$: Observable<Book[]>;

  loading$: Observable<boolean>;

  constructor(private store: Store<fromBooks.State>)
  {
    this.searchQuery$ = store.select(fromBooks.getSearchQuery)
      .take(1);
    this.books$ = store.select(fromBooks.getSearchResults);
    this.loading$ = store.select(fromBooks.getSearchLoading);
  }

  search(query: string)
  {
    this.store.dispatch(new book.Search(query));
  }
}
