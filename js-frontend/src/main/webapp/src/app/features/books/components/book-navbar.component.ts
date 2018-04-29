import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'ptf-book-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ptf-nav-item (activate)="hideNavItems()" *ngIf="loggedIn$ | async" routerLink="/" icon="book"
                  hint="View your book collection">My Collection
    </ptf-nav-item>
    <ptf-nav-item (activate)="hideNavItems()" *ngIf="loggedIn$ | async" routerLink="/books/find"
                  icon="search"
                  hint="Find your next book!">Browse Books
    </ptf-nav-item>
    <ptf-nav-item (activate)="hideNavItems()" *ngIf="!(loggedIn$ | async)">Sign In</ptf-nav-item>
    <ptf-nav-item (activate)="logout()" *ngIf="loggedIn$ | async">Sign Out</ptf-nav-item>
  `
})
export class BookNavbarComponent
{
}
