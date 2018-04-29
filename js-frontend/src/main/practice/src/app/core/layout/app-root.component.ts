import {ChangeDetectionStrategy, Component, Inject, OnInit, Self} from '@angular/core';
// import {LogService} from 'ng2-log-service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/timer';
import {Store} from '@ngrx/store';
import {CoreIdentityActions, CoreLayoutActions, CoreLayoutModels, CoreReducer} from '../feature';
import {ApolloCache} from 'apollo-cache';
import {KeycloakProfile} from 'keycloak-js';
import {Apollo} from 'apollo-angular';
import {HttpLink} from 'apollo-angular-link-http';
import {KeycloakApolloLink} from '../identity/keycloak-apollo-link.service';
import {APOLLO_HTTP_LINK, NEO4J_HTTP_LINK, NGRX_APOLLO_CACHE} from '../../app.di';
import {LoggerService} from '../logging/logger.service';

@Component({
  selector: 'ptf-root',
  template: `
    <ptf-available-overlay></ptf-available-overlay>
    <ptf-top-toolbar class="control-theme" fxFlex="0 0 auto" (beginLogin)="beginLogin()"
                     (beginRegister)="beginRegister()" (beginLogout)="beginLogout()"
                     (showNavItems)="showNavItems()" (hideNavItems)="hideNavItems()"
                     (showSettings)="showSettings()" (hideSettings)="hideSettings()"
                     [brandData$]="brandData$" [navItems$]="navItems$" [hasValidLogin$]="hasValidLogin$"
                     [userProfile$]="userProfile$" [isNavMenuShown$]="isNavMenuShown$"></ptf-top-toolbar>
    <mat-sidenav-container fxFlex.gt-xs="0 0 calc(100vh - 64px - 48px - 32px)" fxFlex.lt-sm="0 0 auto">
      <mat-sidenav [opened]="isSideNavShown$ | async">
        <ptf-sidenav-panel fxLayout="column"></ptf-sidenav-panel>
      </mat-sidenav>
      <router-outlet></router-outlet>
      <footer fxHide.gt-xs fxShow.lt-sm fxLayout="column" fxLayoutGap="4px" fxLayoutAlign="center center">
        <span fxFlex="0 0 24px" class="footer-text">&copy; John C. Heinnickel, 2017</span>
      </footer>
    </mat-sidenav-container>
    <footer fxHide.lt-sm fxShow.gt-xs fxLayout="column" fxLayoutAlign="center center">
      <span fxFlex="0 0 auto" class="footer-text">&copy; John C. Heinnickel, 2017</span>
    </footer>
  `,
  styles: [
      `
      :host {
        flex-flow: column nowrap;
        align-content: stretch;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
      }

      mat-sidenav-container {
        width: 100vw;
        overflow: hidden;
      }

      footer {
        height: 32px;
      }

      router-outlet {
        display: none;
      }

      @media (min-width: 600px) {
        mat-sidenav {
          display: block;
          height: calc(100vh - 64px - 48px - 32px);
          overflow: hidden;
        }

        router-outlet ::ng-deep + * > * {
          display: block;
          height: calc(100vh - 64px - 48px - 32px);
          width: 100%;
          overflow: hidden;
        }
      }

      @media (max-width: 599px) {
        /* Extend sidenav over the footer since it may have scrolled away. */
        mat-sidenav {
          display: block;
          height: calc(100vh - 56px - 48px);
          overflow: hidden;
        }

        /* Set min-height to preserve the footer's distance if space permits, but use auto height to push
           footer as far down along the scroll path as needed to fit. */
        router-outlet ::ng-deep + * > * {
          display: block;
          height: auto;
          min-height: calc(100vh - 56px - 48px - 32px);
          overflow: scroll;
        }
      }

      ::ng-deep mat-sidenav-content {
        width: 100%;
      }

      footer {
        height: 48px;
        width: 100vw;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-color: #f0f0f0;
      }

      .footer-text {
        font-size: 18px;
        line-height: 24px;
        font-weight: 700;
        font-family: 'Anonymous Pro', 'Roboto', monospace;
      }
    `
  ],
  providers: [LoggerService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppRootComponent implements OnInit
{
  /**
   * Selectors are applied with `select` operator, which returns an Observable for chosen state subtree.
   */
  readonly brandData$: Store<CoreLayoutModels.Brand>;

  readonly isSideNavShown$: Store<boolean>;

  readonly isNavMenuShown$: Store<boolean>;

  readonly navItems$: Store<CoreLayoutModels.MenuItems>;

  readonly hasValidLogin$: Store<boolean>;

  readonly userProfile$: Store<KeycloakProfile>;

  constructor(
    private readonly store: Store<CoreReducer.State>,
    @Self() private readonly logService: LoggerService )
    // private readonly apollo: Apollo,
    // @Inject(APOLLO_HTTP_LINK) private readonly apolloHttpLink: HttpLink,
    // @Inject(NEO4J_HTTP_LINK) private readonly neo4jHttpLink: HttpLink,
    // @Inject(NGRX_APOLLO_CACHE) private readonly cache: ApolloCache<any>,
    // private readonly keycloakLink: KeycloakApolloLink)
  {
    // this.logService.namespace = 'AppRootContainer';
    this.logService.info('Constructor for AppRootContainer');

    this.brandData$ = this.store.select(CoreReducer.getBrandData);
    this.isSideNavShown$ = this.store.select(CoreReducer.isSideNavShown);
    this.isNavMenuShown$ = this.store.select(CoreReducer.isNavMenuShown);
    this.navItems$ = this.store.select(CoreReducer.getNavItems);
    this.hasValidLogin$ = this.store.select(CoreReducer.hasValidLogin);
    this.userProfile$ = this.store.select(CoreReducer.getUserProfile);

    // apollo.createNamed('neo4j', {
    //   link: keycloakLink.concat(neo4jHttpLink),
    //   cache: cache,
    //   connectToDevTools: true
    // });
    // apollo.createNamed('apollo', {
    //   link: keycloakLink.concat(apolloHttpLink),
    //   cache: cache,
    //   connectToDevTools: true
    // });
  }

  ngOnInit()
  {
    this.logService.info('I am onInit for AppRootContainer');
    this.store.dispatch(
      new CoreLayoutActions.UseSideNavMode());
  }

  hideNavItems()
  {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our
     * application.
     */
    this.store.dispatch(new CoreLayoutActions.HideNavItems());
  }

  showNavItems()
  {
    console.log('Showing nav items');
    this.store.dispatch(new CoreLayoutActions.ShowNavItems());
  }

  beginLogin()
  {
    this.hideNavItems();
    this.store.dispatch(new CoreIdentityActions.RequestLoginRedirect({
      onReturnRedirectUrl: '/'
    }));
  }

  beginRegister()
  {
    this.hideNavItems();
    this.store.dispatch(new CoreIdentityActions.RequestSignupRedirect({
      onReturnRedirectUrl: '/'
    }));
  }

  beginLogout()
  {
    this.hideNavItems();
    this.store.dispatch(new CoreIdentityActions.RequestLogoutRedirect({
      onReturnRedirectUrl: '/'
    }));
  }

  hideSettings()
  {
    console.log('Hide Settings TODO');
  }

  showSettings()
  {
    console.log('Show Settings TODO');
  }

  onActivate(event: any)
  {
    this.logService.info('Outlet activated', event);
  }

  onDeactivate(event: any)
  {
    this.logService.info('Outlet deactivated', event);
  }
}
