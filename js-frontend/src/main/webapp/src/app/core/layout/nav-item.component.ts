import {Component, Input} from '@angular/core';

@Component({
  selector: 'ptf-nav-item',
  template: `
    <a mat-list-item [routerLink]="routerLink">
      <mat-icon mat-list-icon>{{ icon }}</mat-icon>
      <span mat-line><ng-content></ng-content></span>
      <span mat-line class="secondary">{{ hint }}</span>
    </a>
  `,
  styles: [
      `
      .secondary {
        color: rgba(0, 0, 0, 0.54);
      }
    `
  ],
})
export class NavItemComponent
{
  @Input() icon = '';

  @Input() hint = '';

  @Input() routerLink: string | any[] = '/';
}
