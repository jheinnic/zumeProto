import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MatMenu} from '@angular/material';
import {KeycloakProfile} from 'keycloak-js';

import {LoginModalComponent} from './login-modal.component';
import {CoreLayoutModels} from '../feature';
import {Store} from '@ngrx/store';

const NO_USER_INFO: KeycloakProfile = {
  username: 'anonymous',
  email: undefined
};

@Component({
  moduleId: './src/app/core/layout/top-toolbar.component',
  selector: 'ptf-top-toolbar',
  template: `
    <mat-menu #appMenu="matMenu">
      <!--
      <button *ngFor="let menuData of navbarData.menuItems" [routerLink]="menuData.routerLink"
              mat-menu-item="matMenu"
              [disabled]="menuData.disabled ? 'disabled' : ''" matTooltip="Tooltip!"
              matTooltipPosition="after">
        <mat-icon *ngIf="menuData.iconName > ''">{{menuData.iconName}}</mat-icon>
        <span *ngIf="menuData.displayName > ''">{{menuData.displayName}}</span>
      </button>
      -->
      <button mat-menu-item="matMenu" [disabled]="false" matTooltip="Settings" matTooltipPosition="after">
        <mat-icon>settings</mat-icon>
        <span>Settings</span>
      </button>
      <button mat-menu-item="matMenu" matTooltip="Help" matTooltipPosition="below">
        <span><mat-icon>help</mat-icon>Help</span>
      </button>
    </mat-menu>
    <mat-toolbar fxLayoutGap="4px" color="primary">
        <button mat-mini-fab color="accent" mat-tooltip="Navigation Menu" matTooltipPosition="below"
                matTipShowDelay="725" (click)="showNavItems.emit()" fxFlex="0 0 auto" fxShow fxHide.lt-md>
          <mat-icon>menu</mat-icon>
        </button>
        <button mat-mini-fab [matMenuTriggerFor]="appMenu" color="accent" matTooltip="Navigation Menu"
                matTooltipPosition="below" matTipShowDelay="725" (click)="showNavItems.emit()"
                fxFlex="0 0 auto" fxShow fxHide.gt-sm>
          <mat-icon>menu</mat-icon>
        </button>
        <span class="brand-name" fxFlex="0 0 auto">{{(brandData$ | async)?.name}}</span>
        <div fxFlex="0 1 100vw"></div>
        <button *ngIf="hasValidLogin$ | async" mat-mini-fab="true" color="accent"
                (click)="showSettings.emit()" matTooltip="Settings" matTooltipPosition="below"
                matTipShowDelay="725" fxFlex="0 0 auto">
          <mat-icon>settings</mat-icon>
        </button>
        <!-- TODO: Upgrade to a media-aware ngSwitch here...-->
        <span fxFlex="0 0 auto" fxHide [fxShow.gt-md]="(hasValidLogin$ | async)">Hello,
        {{(userProfile$ | async)?.firstName}}</span>
        <button *ngIf="(hasValidLogin$ | async) === false" mat-raised-button (click)="beginRegister.emit()"
                color="accent" matTooltip="Register" matTooltipPosition="below" fxFlex="0 0 auto">
          <span>REGISTER</span>
        </button>
        <button *ngIf="! (hasValidLogin$ | async)" mat-mini-fab (click)="beginLogin.emit()" color="accent"
                matTooltip="Login" matTooltipPosition="below" fxFlex="0 0 auto">
          <mat-icon>cloud_off</mat-icon>
        </button>
    </mat-toolbar>
        <nav mat-tab-nav-bar color="primary" backgroundColor="accent" >
          <a mat-tab-link fxFlex="0 0 auto" routerLink="/books" routerLinkActive #rla="routerLinkActive"
             [active]="rla.isActive" matTooltip="{{rla.isActive}}" matTooltipPosition="below">Books</a>
          <a mat-tab-link fxFlex="0 0 auto" routerLink="/gqltoy" routerLinkActive #rla="routerLinkActive"
             [active]="rla.isActive" [matTooltip]="rla.isActive" matTooltipPosition="below">GQL Toy</a>
        </nav>
  `,
  styles: [
      `
      mat-toolbar button, mat-toolbar span {
        margin-left: 3px;
        margin-right: 3px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopToolbarComponent
{
  @Input() brandData$: Store<CoreLayoutModels.Brand>;

  @Input() navItems$: Store<CoreLayoutModels.MenuItems>;

  @Input() userProfile$: Store<KeycloakProfile>;

  @Input() hasValidLogin$: Store<boolean>;

  @Input() isNavMenuShown$: Store<boolean>;

  appMenu: MatMenu;

  @Output() showNavItems: EventEmitter<void> = new EventEmitter<void>();

  @Output() hideNavItems: EventEmitter<void> = new EventEmitter<void>();

  @Output() beginLogout: EventEmitter<void> = new EventEmitter<void>();

  @Output() beginRegister: EventEmitter<void> = new EventEmitter<void>();

  @Output() beginLogin: EventEmitter<void> = new EventEmitter<void>();

  @Output() showSettings: EventEmitter<void> = new EventEmitter<void>();

  @Output() hideSettings: EventEmitter<void> = new EventEmitter<void>();

  private loginModalRef: MatDialogRef<LoginModalComponent>;


  constructor(private readonly dialog: MatDialog)
  {
  }

  public onClickLogin()
  {
    this.loginModalRef =
      this.dialog.open(
        LoginModalComponent, {disableClose: false}
      );

    this.loginModalRef.afterClosed()
      .take(1)
      .subscribe(
        result => {
          console.log('result: ' + result);
          if (result) {
            // this.userProfile = result.userProfile;
          }
        }
      );
  }
}
