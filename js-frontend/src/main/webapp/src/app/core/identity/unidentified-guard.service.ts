import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {CoreReducer} from '../feature';

@Injectable()
export class UnidentifiedGuard implements CanActivate
{
  constructor(private readonly store: Store<CoreReducer.State>, private readonly router: Router) {}

  canActivate(routeSnapshot: ActivatedRouteSnapshot): Observable<boolean>
  {
    // TODO: This contract cannot be preserved as-is without "RequireAnonymity".  This is also not
    //       currently used, but do not be surprised if it behaves strangely if that should change
    //       later on without implementing mandatory anonymity!
    // this.store.dispatch(new AuthentClientActions.RequireAnonymity());
    return this.store.select(CoreReducer.hasValidLogin)
      .delayWhen(
        Observable.of,
        this.store.select(CoreReducer.isAuthentClientReady)
          .filter(value => value))
      .map(invertResult => ! invertResult);
  }
}
