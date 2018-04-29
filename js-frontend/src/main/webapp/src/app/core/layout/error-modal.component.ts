import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Store} from '@ngrx/store';
import {LogService} from 'ng2-log-service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/operator/map';
import 'rxjs/operator/filter';
import 'rxjs/operator/catch';
import {CoreReducer} from '../feature';

@Component({
  template: `
    <h1>Login Failure</h1>
    <button md-button routerLink='/session/login'>Login</button>
    <button md-button routerLink='/'>Back To Root</button>
    <button md-button routerLink='/books'>Books</button>
    <P>{{params}}</P>
  `,
  styles: [],
  providers: [LogService] // Inject a LogService namespace
})
export class ErrorModalComponent {
  public readonly params: Params;

  constructor(private readonly route: ActivatedRoute,
              private readonly logService: LogService) {
    this.logService.namespace = 'ErrorModalComponent';
    this.params = route.snapshot.params;
  }
}
