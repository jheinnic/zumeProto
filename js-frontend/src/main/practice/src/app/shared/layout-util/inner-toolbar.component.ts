import {Component, OnDestroy, AfterViewInit, HostBinding, Input} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

@Component({
  moduleId   : './src/app/core/layout/inner-navbar.component',
  selector   : 'ptf-inner-toolbar',
  template: `
    <nav mat-tab-nav-bar class="mat-primary">
      <a *ngFor="let tabItem of tabData" mat-tab-link
         routerLink="{{tabItem.routerLink}}" routerLinkActive #rla="routerLinkActive"
         [active]="rla.isActive" matTooltip="{{rlaSafe && rla.isActive}}!"
         matTooltipPosition="below">{{tabItem.displayName}}</a>
    </nav>
  `
})
export class InnerToolbarComponent implements AfterViewInit
{
  @HostBinding('class.navbar-top') public readonly hostCss = true;

  @Input() tabData: any = [];

  rlaSafe = false;

  constructor() {
    // this.rlaSafe = false;
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      this.rlaSafe = true;
    }, 0);
  }
}

