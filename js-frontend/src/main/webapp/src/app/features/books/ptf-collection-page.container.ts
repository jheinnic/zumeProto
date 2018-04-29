import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/let';
import {Store} from '@ngrx/store';

import {Book} from './book.models';
import * as fromBooks from './book-feature.reducer';
import * as collection from './book-collection.actions';

@Component({
  selector: 'ptf-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-card>
      <md-card-title>My Collection</md-card-title>
      <md-card-content>{{keycloak}}</md-card-content>
    </md-card>
    <ptf-book-preview-list [books]="books$ | async"></ptf-book-preview-list>
  `,
  /**
   * Container components are permitted to have just enough styles
   * to bring the view together. If the number of styles grow,
   * consider breaking them out into presentational
   * components.
   */
  styles: [
      `
      md-card-title {
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class CollectionPageComponent implements OnInit
{
  books$: Observable<Book[]>;

  keycloak: string;

  constructor(private store: Store<fromBooks.State>, private readonly route: ActivatedRoute)
  {
    console.log('BooksCollectionPage Constructor');
    this.books$ = store.select(fromBooks.getBookCollection);
    this.keycloak = route.snapshot.data['keycloak'];
  }

  ngOnInit()
  {
    console.log('BooksCollectionPage ngOnInit()');
    this.store.dispatch(new collection.Load());
  }
}
