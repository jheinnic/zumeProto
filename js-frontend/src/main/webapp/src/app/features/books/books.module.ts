import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {MaterialModule} from '../../shared/material.module';

import {FindBookPageComponent} from './ptf-find-book-page.container';
import {ViewBookPageComponent} from './ptf-view-book-page.container';
import {SelectedBookPageComponent} from './ptf-selected-book-page.container';
import {CollectionPageComponent} from './ptf-collection-page.container';

import {GoogleBooksService} from './google-books.service';

import {BookExistsGuard} from './book-exists.guard';
import {BookEffects} from './book.effects';
import {CollectionEffects} from './book-collection.effects';
import {initialState, reducerMap} from './book-feature.reducer';

import {ComponentsModule} from './components/components.module';
import {BooksRoutingModule} from './books-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ComponentsModule,

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('books', reducerMap, {initialState}),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([BookEffects, CollectionEffects]),
    BooksRoutingModule
  ],
  declarations: [
    FindBookPageComponent,
    ViewBookPageComponent,
    SelectedBookPageComponent,
    CollectionPageComponent,
  ],
  providers:
    [GoogleBooksService, BookExistsGuard],
})

export class BooksModule {
}
