import {ChangeDetectionStrategy, Component, Inject, Input, OnInit} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {KeycloakProfile} from 'keycloak-js';
import {Store} from '@ngrx/store';
import {LogService} from 'ng2-log-service';

@Component({
  selector: 'ptf-layout',
  template: `
    
  `,
  styles: [
      `
      :host {
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: stretch;
        justify-content: stretch;
      }

      mat-sidenav-container {
        background: rgba(0, 0, 0, 0.03);
      }

      mat-sidenav-container div.main-panel {
        height: calc(100vh - 56px - 24px)
      }

      *, ::ng-deep * {
      }
    `
  ],
  providers: [LogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit
{
  @Input() hasValidLogin$: Store<boolean>;

  @Input() userProfile$: Store<KeycloakProfile>;

  @Input() mainLayout: 'row' | 'column' | 'row-reverse' | 'column-reverse' = 'column';

  @Input() showsInnerHeader = false;

  title = 'ptf';

  constructor(
    private readonly logService: LogService,
    @Inject(APP_BASE_HREF) private readonly appBaseHref: string)
  {
    this.logService.namespace = 'LayoutComponent';
    this.logService.info('Constructor for LayoutComponent');
  }

  public ngOnInit()
  {
    this.logService.info(
      'I am ngOnInit for LayoutComponent');
  }
}
