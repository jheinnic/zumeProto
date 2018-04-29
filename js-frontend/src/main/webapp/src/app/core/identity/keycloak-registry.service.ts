import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Action} from '@ngrx/store';
import {LogService, LogServiceFactory} from 'ng2-log-service';
import {KeycloakError, KeycloakProfile} from 'keycloak-js';

import {KeycloakRegistryEntry} from './keycloak-registry-entry.service';
import * as FeatureActions from '../feature/identity/core-identity.actions';
import * as Models from '../feature/identity/core-identity.models';
import {KEYCLOAK_INTERNAL_HELPERS, KeycloakInternalHelper} from './keycloak-internal-helper.interface';

@Injectable()
export class KeycloakRegistry
{
  private readonly logService: LogService;

  private readonly entriesByName: EntriesByName;

  private readonly actionEventsSubject: Subject<Action>;

  private readonly errorEventsSubject: Subject<Models.ErrorDetail>;

  private readonly userProfileSubject: Subject<KeycloakProfile>;

  private activated: KeycloakRegistryEntry;

  constructor(
    @Inject(KeycloakRegistryEntry) private readonly keycloakEntries: KeycloakRegistryEntry[],
    @Inject(KEYCLOAK_INTERNAL_HELPERS) private readonly internalHelpers: KeycloakInternalHelper[],
    readonly logServiceFactory: LogServiceFactory)
  {
    this.logService = logServiceFactory.newLogService();
    this.logService.namespace = 'KeycloakRegistry';

    this.entriesByName = keycloakEntries.reduce(
      (obj, next) => Object.assign(obj, {[next.qualifiedName]: next}), {});

    this.actionEventsSubject = new Subject<Action>();
    this.errorEventsSubject = new Subject<Models.ErrorDetail>();
    this.userProfileSubject = new Subject<KeycloakProfile>();

    this.logService.debug('Keycloak Registry constructed with ', this.entriesByName);
  }

  bootstrapAuthentication(adapterName: string)
  {
    if (this.activated !== undefined) {
      throw Error(
        'Keycloak Registry may only be wired to one of its available adapters one time at bootstrap');
    }

    this.activated = this.entriesByName[adapterName];
    if (this.activated !== undefined) {
      const self = this;

      this.activated.onAuthSuccess = () => {
        this.logService.info('Inside onAuthSuccess()');
        this.actionEventsSubject.next(new FeatureActions.FindSessionLoggedIn());
      };

      this.activated.onAuthError = (errorData: KeycloakError) => {
        this.logService.error('Inside onAuthError()', errorData);
        this.errorEventsSubject.next({
          errorCause: Models.ErrorCause.Unknown,
          displayMessage: errorData.error_description + ', ' + errorData.error
        });
      };

      this.activated.onReady = (authenticated: boolean) => {
        this.logService.info('Inside onReady( )', {authenticated});
        if (!authenticated) {
          // If an authenticated session was found, an emission about its existence will have already
          // occurred, but nothing will have been emitted for the absence of a session yet.
          self.actionEventsSubject.next(
            new FeatureActions.FindSessionLoggedOut()
          );
        }

        // Inject the Keycloak session into all other services that use it.
        const keycloakInst = this.activated.toInstance();
        for (const nextHelper of this.internalHelpers) {
          nextHelper.injectKeycloakAdapter(keycloakInst);
        }

        self.actionEventsSubject.next(new FeatureActions.AuthenticationReady());
      };

      this.activated.onAuthRefreshSuccess = () => {
        this.actionEventsSubject.next(new FeatureActions.ReceiveTokenRefresh());
      };

      this.activated.onAuthRefreshError = () => {
        this.errorEventsSubject.next({
          errorCause: Models.ErrorCause.Unknown,
          displayMessage: 'Logged out because access token has expired and refresh token failed to function.'
        });
      };

      this.activated.onAuthLogout = () => {
        this.actionEventsSubject.next(new FeatureActions.FindSessionLoggedOut());
      };

      this.activated.onTokenExpired = () => {
        this.actionEventsSubject.next(new FeatureActions.RequestTokenRefresh());
      };

      // Moment of truth.  Fire it up!
      this.activated.bootstrap();
    }
  }

  get actionEvents(): Observable<Action>
  {
    return this.actionEventsSubject.asObservable();
  }

  get errorEvents(): Observable<Models.ErrorDetail>
  {
    return this.errorEventsSubject.asObservable();
  }

  get userProfile(): Observable<KeycloakProfile>
  {
    return this.userProfileSubject.asObservable();
  }

  login(onReturnRedirectKey?: string): void
  {
    this.activated.login(onReturnRedirectKey);
  }

  logout(onReturnRedirectKey?: string): void
  {
    this.activated.logout(onReturnRedirectKey);
  }

  signup(onReturnRedirectKey?: string): void
  {
    this.activated.signup(onReturnRedirectKey);
  }

  refreshToken(minSecLeft = 50): Promise<boolean>
  {
    return this.activated.refreshToken(minSecLeft);
  }

  loadUserProfile(): Promise<KeycloakProfile>
  {
    return this.activated.loadUserProfile();
  }

  clearSession(): void
  {
    this.activated.clearSession();
  }
}

interface EntriesByName
{
  [key: string]: KeycloakRegistryEntry
}
