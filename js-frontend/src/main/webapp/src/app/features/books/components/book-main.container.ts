import 'rxjs/add/operator/let';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'ptf-book-main',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container>
      <h1>Welcome to {{title}}!!</h1>
      <router-outlet></router-outlet>
    </ng-container>

  `
})
export class BookMainComponent {
  title = 'Book Feature'
}
