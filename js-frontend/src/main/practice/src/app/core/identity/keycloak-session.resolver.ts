import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import {Store} from '@ngrx/store';
// import {LogService, LogServiceFactory} from 'ng2-log-service';
import {CoreReducer} from '../feature';
import {LoggerService} from '../logging/logger.service';

@Injectable()
export class KeycloakSessionResolver implements Resolve<any>
{
  constructor(
    private readonly store: Store<CoreReducer.State>,
    private readonly logService: LoggerService
  )
  {
    // this.logService = logServiceFactory.newLogService();
    // this.logService.namespace = 'KeycloakSessionResolver';

    // this.store.dispatch(
    //   new Actions.BootstrapKeycloakClient({
    //     adapterName: 'default'
    //   }));
    this.logService.warn('Constructor for KeycloakSessionResolver');
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
  {
    return this.store.select(CoreReducer.isAuthentClientReady)
      .do((msg) => { console.log('On retainer -- ', msg)})
      .filter(status => status)
      .take(1);
  }
}
