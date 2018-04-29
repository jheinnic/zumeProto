import { Component, Input } from '@angular/core';
import { Book } from '../book.models';

@Component({
  selector: 'ptf-book-preview-list',
  template: `
    <ptf-book-preview *ngFor="let book of books" [book]="book"></ptf-book-preview>
  `,
  styles: [
    `
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `,
  ],
})
export class BookPreviewListComponent {
  @Input() books: Book[];
}
