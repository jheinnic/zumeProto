import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './core/layout/page-not-found.component';
import {LoginDepartureGuard} from './core/identity/login-departure.guard';

const routes: Routes = [
  {
    path: 'books',
    pathMatch: 'prefix',
    // canActivate: [AuthenticatedGuard],
    // canLoad: [AuthenticateLoadGuard],
    canDeactivate: [LoginDepartureGuard],
    loadChildren: './features/books/books.module#BooksModule',
  },
  {
    path: 'gqltoy',
    pathMatch: 'prefix',
    canDeactivate: [LoginDepartureGuard],
    loadChildren: './features/gqltoy/gql-toy.module#GqlToyModule',
  },
  {
    path: 'gqltoy2',
    pathMatch: 'prefix',
    canDeactivate: [LoginDepartureGuard],
    loadChildren: './features/gqltoy2/gql-toy.module#GqlToyModule',
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {useHash: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule
{
}
