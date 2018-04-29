import {Injectable} from '@angular/core';
import {Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/delayWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/race';
import {Actions, Effect} from '@ngrx/effects';
import {RouterCancelPayload} from '@ngrx/router-store';
import {Action} from '@ngrx/store';
import {Database} from '@ngrx/db';

import {LogService, LogServiceFactory} from 'ng2-log-service';
import {KeycloakRegistry} from '../../identity/keycloak-registry.service';
import * as FeatureActions from './core-identity.actions';
import * as Models from './core-identity.models';

/**
 * A thin wrapper around three of the Keycloak service adapter's methods, specifically those that accept
 * input configuration, allowing application-specific settings for those options to be encapsulated.  The
 * encapsulation renders this service sufficiently opaque to be used to create, authenticate, authorize,
 * and terminate the application-scoped identity session from any point within the application where
 * necessary.
 *
 * At present, authorization interface requirements have not yet been addressed.  A future iteration will
 * see this corrected before their absence impairs consumption of this work.
 */
@Injectable()
export class CoreIdentityEffects // implements OnRunEffects
{
  private static readonly MAX_PROFILE_RETRIES = 3;
  private static readonly PROFILE_RETRY_DELAY = 520;

  private readonly logService: LogService;

  // private readonly currentActivityMode$ = this.store.select(Reducer.currentIdentityActivityMode);

  @Effect({dispatch: false}) readonly openDb$: Observable<any> =
    Observable.defer(() => {
      return this.db.open('app.core');
    });

  @Effect({dispatch: false}) bootstrapKeycloakClient$: Observable<Action> =
    this.actions$.ofType(FeatureActions.BOOTSTRAP_AUTHENTICATION)
      .do((action: FeatureActions.BootstrapAuthenticationClient) => {
          this.keycloakRegistry.bootstrapAuthentication(action.payload.adapterName);
          this.logService.info('Just returned from call to async keycloak bootstrap');
        }
      );

  @Effect({dispatch: false}) bootstrapFailed$ = this.actions$
    .ofType(FeatureActions.PROCESS_BOOTSTRAP_ERROR)
    .do(action => {
      this.logService.info('TODO!!!');
    });

  // Handlers registered with the Keycloak adapter instance emit actions through following subject to
  // trigger responses to external authentication and authorization triggers.
  @Effect() private readonly keycloakEvents$: Observable<Action> = this.keycloakRegistry.actionEvents;

  /*
  @Effect() private readonly startBootstrapping$: Observable<Action> =
    this.keycloakRegistry.errorEvents
      .flatMap((err: Models.ErrorDetail) => {
        console.log('Error pipeline will receive ', err);
        return this.currentActivityMode$.map((activityMode: Models.ActivityMode) => {
          switch (activityMode) {
            case Models.ActivityMode.Signup:
            {
              return new FeatureActions.ProcessSignupError(err);
            }
            case Models.ActivityMode.LoggingOut:
            {
              return new FeatureActions.ProcessLogoutError(err);
            }
            case Models.ActivityMode.Authenticate:
            {
              return new FeatureActions.ProcessLoginError(err)
            }
            case Models.ActivityMode.LoadingProfile:
            {
              return new FeatureActions.UserProfileError(err);
            }
            case Models.ActivityMode.Bootstrap:
            {
              return new FeatureActions.BootstrapError(err);
            }
            case Models.ActivityMode.Anonymous:
            {
              console.log('TODO: Challenge on Anonymous error!?');
              return new FeatureActions.RequestLoginRedirect({
                onReturnRedirectUrl: '/'
              });
            }
            case Models.ActivityMode.LoggedIn:
            {
              console.log('TODO: Challenge on Authenticated error!?');
              return new FeatureActions.RequestLoginRedirect({
                onReturnRedirectUrl: '/'
              });
            }
            default:
            {
              console.log('Unexpected default code block', activityMode);
              return new FeatureActions.RequestLoginRedirect({
                onReturnRedirectUrl: '/'
              });
            }
          }
        });
      });
  */

  @Effect({dispatch: false}) readonly setPostAuthUrl$ = this.actions$
    .ofType(FeatureActions.SET_POST_AUTH_URL)
    .concatMap((action: FeatureActions.SetPostAuthUrl) =>
      this.db.insert('onReturnUrl', [action.payload])
        .catch(err => {
          this.logService.warn('Could not retain on-return URL.  Will fall back to default.  ', err);
          return Observable.of(action.payload);
        })
        .do((value) => {
          this.logService.info('Output to do', value);
          this.logService.info('post auth url action', action);
          switch (action.payload.activityMode)
          {
            case Models.ActivityMode.Authenticate:
            {
              this.keycloakRegistry.login(action.payload.uuid);
              break;
            }
            default:
            {
              this.logService.error(
                'Request to set post-auth return for activity mode ' + action.payload.activityMode);
              break;
            }
          }
        }));

  @Effect({dispatch: false}) returnToPostAuthUrl$ = this.actions$
    .ofType(FeatureActions.RETURN_TO_POST_AUTH_URL)
    .concatMap((action: FeatureActions.ReturnToPostAuthUrl) => {
      return this.db.query(
        'onReturnUrl', rec => rec.uuid === action.payload.uuid)
        .catch(err => {
          this.logService.error('Could not query for on return URL', err);
          return Observable.of({
            onReturnRedirectUrl: '/'
          });
        })
    })
    .do(rec => {
      this.router.navigateByUrl(rec.onReturnRedirectUrl)
        .catch(err => {
          this.logService.error('Unable to navigate on return to ' + rec.onReturnRedirectUrl, err);
        })
    });

  @Effect() readonly requestBeginLogin$ = this.actions$
    .ofType(FeatureActions.REDIRECT_TO_LOGIN)
    .map((action: FeatureActions.RequestLoginRedirect) =>
      new FeatureActions.SetPostAuthUrl(
        action.payload.onReturnRedirectUrl, Models.ActivityMode.Authenticate));

  // If the on-return handling stumbles on an error, it will get fired from the KeycloakError observable,
  // so the only needs to test for the successful case that leads to an on-return redirect.
  @Effect() returnFromLogin$ = this.actions$
    .ofType(FeatureActions.RETURN_FROM_LOGIN)
    .map((action: FeatureActions.ReturnFromLogin) => {
      this.logService.info('In return from login effect');
      return new FeatureActions.ReturnToPostAuthUrl(action.payload);
    })
    .delayWhen(action => this.actions$.ofType(FeatureActions.RECEIVE_USER_PROFILE));

  // .do(value => {
  //   this.logService.info('Observed isUserProfileLoaded = ', value);
  // })
  // }).do( value => { this.logService.info('Outside delay observed ', value); });

  @Effect() onFindValidSession$ = this.actions$
    .ofType(FeatureActions.FIND_VALID_TOKEN)
    .mapTo(new FeatureActions.RequestUserProfile(0));

  @Effect({dispatch: false}) loginFailed$ = this.actions$
    .ofType(FeatureActions.PROCESS_LOGIN_ERROR)
    .do((action: FeatureActions.ProcessLoginError) => {
      this.logService.info('TODO!!!');
      // TODO: This looks right--reenable?  No, not right...
      // this.router.navigate(['session', 'error', {message: 'Login Failure Message TODO'}])
    });

  // TOOO: Replace USER_PROFILE_ERROR based retry with retryWhen() here.

  @Effect() requestUserProfile$ = this.actions$
    .ofType(FeatureActions.REQUEST_USER_PROFILE)
    .concatMap((action: FeatureActions.RequestUserProfile) => {
      this.logService.info(`Load user profile is being requested`);
      return Observable.fromPromise(this.keycloakRegistry.loadUserProfile())
        .map(profile => new FeatureActions.ReceiveUserProfile(profile))
        .retryWhen(err => {
          if (action.payload.attemptsMade < CoreIdentityEffects.MAX_PROFILE_RETRIES) {
            return Observable.of(
              new FeatureActions.RequestUserProfile(action.payload.attemptsMade + 1)
            )
              .delay(CoreIdentityEffects.PROFILE_RETRY_DELAY)
              .takeUntil(
                Observable.race(
                  this.actions$.ofType(FeatureActions.REDIRECT_TO_LOGOUT)
                    .take(1),
                  this.actions$.ofType(FeatureActions.PURGE_FAILED_SESSION)
                    .take(1)));
          } else {
            return Observable.of(new FeatureActions.UserProfileError({
              errorCause: Models.ErrorCause.Server,
              displayMessage: 'Too many retries: ' + err
            }));
          }
        });
      });

  @Effect() userProfileFailed$ = this.actions$
    .ofType(FeatureActions.USER_PROFILE_ERROR)
    .filter(action => {
      console.error('User profile error TODO');
      return false;
    });
    // .concatMap(action =>
    //   Observable.of(new FeatureActions.RequestUserProfile())
    //     .delay(30000)
    //     .takeUntil(
    //       Observable.race(
    //         this.actions$.ofType(FeatureActions.REDIRECT_TO_LOGOUT)
    //           .take(1),
    //         this.actions$.ofType(FeatureActions.PURGE_FAILED_SESSION)
    //           .take(1))));

  @Effect({dispatch: false}) requestLogout$ = this.actions$
    .ofType(FeatureActions.REDIRECT_TO_LOGOUT)
    .map((action: FeatureActions.RequestLogoutRedirect) =>
      new FeatureActions.SetPostAuthUrl(
        action.payload.onReturnRedirectUrl, Models.ActivityMode.LoggingOut));

  @Effect({dispatch: false}) requestRegistration$ = this.actions$
    .ofType(FeatureActions.REDIRECT_TO_SIGNUP)
    .map((action: FeatureActions.RequestSignupRedirect) =>
      new FeatureActions.SetPostAuthUrl(
        action.payload.onReturnRedirectUrl, Models.ActivityMode.Signup));

  @Effect() requestTokenRefreshObs$ =
    this.actions$.ofType(FeatureActions.REQUEST_TOKEN_REFRESH)
      .mergeMap(
        (action: FeatureActions.RequestTokenRefresh) =>
          Observable.fromPromise(
            this.keycloakRegistry.refreshToken(60)
              .then(() =>
                new FeatureActions.ReceiveTokenRefresh()
              )
              .catch((err: any) =>
                new FeatureActions.TokenRefreshError({
                  errorCause: Models.ErrorCause.Unknown,
                  displayMessage: err
                })
              )
          )
      );

  @Effect({dispatch: false}) logoutFailed$ = this.actions$
    .ofType(FeatureActions.PROCESS_LOGOUT_ERROR)
    .do((action: FeatureActions.ProcessLogoutError) => {
      // this.router.navigate(['session', 'error', {message: 'Logout Failure Message TODO'}]);
    });

  @Effect({dispatch: false}) registrationFailed$ = this.actions$
    .ofType(FeatureActions.PROCESS_SIGNUP_ERROR)
    .do((action: FeatureActions.ProcessSignupError) => {
      // this.router.navigate(['session', 'error', {message: 'Registration Failure Message TODO'}]);
    });

  constructor(
    logServiceFactory: LogServiceFactory,
    private readonly keycloakRegistry: KeycloakRegistry,
    private readonly actions$: Actions,
    private readonly db: Database,
    private readonly router: Router)
  {
    this.logService = logServiceFactory.newLogService();
    this.logService.namespace = 'IdentityEffects';
    this.logService.log('IdentityEffects Constructor');
  }

  getReturnRedirectUrl(payload: RouterCancelPayload<RouterStateSnapshot, any>): string
  {
    const altRedirect = payload.routerState.data['authGuardRedirect'];
    return altRedirect ? altRedirect : '/session/auth';
  }
}


