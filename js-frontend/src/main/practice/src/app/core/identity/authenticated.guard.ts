import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import {Store} from '@ngrx/store';

import {CoreReducer} from '../feature';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private readonly store: Store<CoreReducer.State>, private readonly router: Router) {
  }

  canActivate(routeSnapshot: ActivatedRouteSnapshot): Observable<boolean> {
    return this.store.select(CoreReducer.hasValidLogin)
      .delayWhen(
        Observable.of,
        this.store.select(CoreReducer.isAuthentClientReady)
          .filter(value => value));
  }
}
