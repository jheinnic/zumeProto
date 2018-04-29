import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../../shared/material.module';

import {BookAuthorsComponent} from './book-authors.component';
import {BookDetailComponent} from './book-detail.component';
import {BookPreviewComponent} from './book-preview.component';
import {BookSearchComponent} from './book-search.component';
import {BookPreviewListComponent} from './book-preview-list.component';

import {SharedModule} from '../../../shared/shared.module';

import {BookMainComponent} from './book-main.container';
import {BookSidenavComponent} from './book-sidenav.component';
import {BookNavbarComponent} from './book-navbar.component';
import {PipesModule} from '../../../shared/pipes/pipes.module';

export const COMPONENTS = [
  BookAuthorsComponent,
  BookDetailComponent,
  BookPreviewComponent,
  BookPreviewListComponent,
  BookSearchComponent,
  BookMainComponent,
  BookSidenavComponent,
  BookNavbarComponent
];

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, MaterialModule, RouterModule, SharedModule, PipesModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  entryComponents: COMPONENTS
})
export class ComponentsModule {}
