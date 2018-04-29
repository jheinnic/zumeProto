import 'rxjs/add/operator/let';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'ptf-book-sidenav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    Sidenav for {{title}}
  `
})
export class BookSidenavComponent {
  title = 'Book Feature'
}
