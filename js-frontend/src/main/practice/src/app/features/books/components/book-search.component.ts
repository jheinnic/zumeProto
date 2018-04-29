import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ptf-book-search',
  template: `
    <mat-toolbar>
      <span fxFlex="0 2 auto" class="brand-name">Find a Book</span>
      <mat-input-container fxFlex="6 1 auto">
        <input matInput placeholder="Search for a book" [value]="query"
               (keyup)="search.emit($event.target.value)">
      </mat-input-container>
      <mat-spinner color="accent" fxFlex="0 2 80%" [fxShow]="searching"></mat-spinner>
    </mat-toolbar>
  `,
  styles: [
      `
      span {
        display: flex;
        margin-left: 320px;
        margin-right: 20px;
      }

      mat-input-container {
        display: flex;
        margin-left: 20px;
        margin-right: 60px;
      }

      mat-card mat-spinner {
        padding-left: 60px;
      }

      mat-spinner {
        display: flex;
        height: 80%;
        width: 80%;
        opacity: 1.0;
        margin-right: 5vw;
      }
    `
  ],
})
export class BookSearchComponent
{
  @Input() query = '';

  @Input() searching = false;

  @Output() search = new EventEmitter<string>();
}
