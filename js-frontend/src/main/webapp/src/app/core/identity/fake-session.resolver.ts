import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import {Store} from '@ngrx/store';

import {CoreReducer} from '../feature';


@Injectable()
export class FakeSessionResolver implements Resolve<boolean>
{
  constructor(private readonly store: Store<CoreReducer.State>)
  {
    console.log('Constructor for FakeSessionResolver');
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>
  {
    console.log('Resolve Method for FakeSessionResolver');
    console.log('Resolve timer begins');
    return Observable.timer(5500).map(value => {
      console.log('Resolve timer fires ', value);
      return true;
    });
  }
}
