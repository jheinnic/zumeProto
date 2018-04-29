import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

import {CoreReducer} from '../feature';
import {LoggerService} from '../logging/logger.service';

// import {LogService, LogServiceFactory} from 'ng2-log-service';

@Injectable()
export class LoginDepartureGuard implements CanDeactivate<any> {

  constructor(
    private readonly store: Store<CoreReducer.State>,
    private readonly logService: LoggerService
  ) {
    // this.logService = loggerFactory.newLogService();
    // this.logService.namespace = 'AuthenticatedGuard';
  }

  public canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    this.logService.info('current state', currentState.url);
    if (nextState) {
      this.logService.info('next state', nextState.url);
    }

    if (component instanceof Object && component.getPostAuthUrl) {
      const returnUrl = component.getPostAuthUrl();
    }

    return true;
  }
}
