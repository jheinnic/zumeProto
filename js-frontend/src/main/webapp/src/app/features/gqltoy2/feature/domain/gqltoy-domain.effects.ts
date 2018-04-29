import {Injectable} from '@angular/core';
import {Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/delayWhen';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import {Actions, Effect} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Database} from '@ngrx/db';
import {LogService, LogServiceFactory} from 'ng2-log-service';
import * as Reducer from './gqltoy-domain.reducer';
import * as FeatureActions from './gqltoy-domain.actions';
import * as Models from './gqltoy-domain.models';

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
export class CoreAuthorizationEffects // implements OnRunEffects
{
  private readonly logService: LogService;

  constructor(
    logServiceFactory: LogServiceFactory,
    private readonly actions$: Actions,
    private readonly store: Store<Reducer.State>,
    private readonly db: Database,
    private readonly router: Router)
  {
    this.logService = logServiceFactory.newLogService();
    this.logService.namespace = 'IdentityEffects';
    this.logService.log('IdentityEffects Constructor');
  }
}


