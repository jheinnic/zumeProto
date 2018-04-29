import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/operator/map';
import 'rxjs/operator/filter';
import 'rxjs/operator/catch';
import {Store} from '@ngrx/store';
// import {LogService} from 'ng2-log-service';
import {CoreIdentityActions, CoreIdentityModels, CoreReducer} from '../feature';
import {LoggerService} from '../logging/logger.service';

@Component({
  template: `
    <h1>Returned from login</h1>
    <h1><a routerLink="/fuggitabatit">Destined for nowhere</a></h1>
    <P>Data:{{route.data | async | json}}
    <\P>
    <P>Fragment:{{route.data | async | json}}
    <\P>
    <P>Params:{{route.params | async | json}}
    <\P>
    <P>Query Params:{{route.queryParams | async | json}}
    <\P>
    <P>Params Map:{{route.paramMap | async | json}}
    <\P>
    <P>Query Params Map:{{route.queryParamMap | async | json}}
    <\P>
  `,
  styles: []
  // providers: [LogService] // Inject a LogService namespace
})
export class ReturnFromLoginComponent implements OnInit
{
  // public authenticateSubscription: Observable<boolean>;

  constructor(
    private readonly store: Store<CoreReducer.State>,
    readonly route: ActivatedRoute,
    private readonly logService: LoggerService)
  {
    // this.logService.namespace = 'ReturnFromLogin';
    this.logService.info('ReturnFromLogin Constructor');
  }

  ngOnInit()
  {
    this.logService.info('ReturnFromLogin ngOnInit()');
    const onReturnRedirectionKey = this.route.snapshot.params['onReturnKey'];
    const qp = this.route.snapshot.queryParams;

    let nextAction;
    if (qp.error || qp.error_description) {
      switch (qp.error) {
        case 'invalid_request':
        {
          nextAction = new CoreIdentityActions.ProcessLoginError({
            errorCause: CoreIdentityModels.ErrorCause.Application,
            displayMessage: qp.error_description
          });
          break;
        }
        default:
        {
          nextAction = new CoreIdentityActions.ProcessLoginError({
            errorCause: CoreIdentityModels.ErrorCause.Unknown,
            displayMessage: qp.error + ', ' + qp.error_description
          });
          break;
        }
      }
    } else {
      nextAction = new CoreIdentityActions.ReturnFromLogin({uuid: onReturnRedirectionKey});
    }

    this.store.dispatch(nextAction);
  }

  getRoute()
  {
    return JSON.stringify(this.route);
  }
}
