import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FindBookPageComponent} from './ptf-find-book-page.container';
import {ViewBookPageComponent} from './ptf-view-book-page.container';
import {CollectionPageComponent} from './ptf-collection-page.container';

import {BookNavbarComponent} from './components/book-navbar.component';
import {BookSidenavComponent} from './components/book-sidenav.component';
import {BookExistsGuard} from './book-exists.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'prefix',
        // canActivateChildren: [AuthenticateChildrenGuard],
        children: [
          {
            path: 'find',
            pathMatch: 'full',
            component: FindBookPageComponent,
          },
          {
            path: ':id',
            pathMatch: 'full',
            canActivate: [BookExistsGuard],
            component: ViewBookPageComponent,
          },
          {
            path: '',
            pathMatch: 'full',
            component: CollectionPageComponent,
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class BooksRoutingModule
{
}
