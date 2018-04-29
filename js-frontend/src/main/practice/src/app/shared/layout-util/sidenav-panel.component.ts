import {Component, OnDestroy, AfterViewInit, HostBinding} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

@Component({
  moduleId   : './src/app/core/layout/sidenav-panel.component',
  selector   : 'ptf-sidenav-panel',
  template: `
    <div class="side-panel-container">
      <mat-nav-list></mat-nav-list>
    </div>
  `
})
export class SidenavPanelComponent
{
  constructor() {
  }
}

