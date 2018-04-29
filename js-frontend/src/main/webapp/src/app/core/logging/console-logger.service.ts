import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

import {Logger} from './logger.interface';
import {Keys} from '../../../../common/lib/metautils/datamodel/IndexedTypes';

type LogMethod = (message?: any, ...optionalParams: any[]): void;

const isDebugMode = environment.isDebugMode;
const noop = (message?: any, ...optionalParams: any[]) => { };

@Injectable()
export class ConsoleLoggerService implements Logger
{
  private _trace: LogMethod;
  private _info: LogMethod;
  private _log: LogMethod;
  private _warn: LogMethod;
  private _error: LogMethod;

  constructor() {
    this._trace = (message?: any, ...optionalParams: any[]) => {
      const logFn: LogMethod = isDebugMode ? (console.trace || console.log || noop) : noop;
      this._trace = logFn.bind(console);
      this._trace(message, optionalParams);
    }

    this._info = (message?: any, ...optionalParams: any[]) => {
      const logFn: LogMethod = isDebugMode ? (console.info || console.log || console.trace || noop) : noop;
      this._info = logFn.bind(console);
      this._info(message, optionalParams);
    }

    this._log = (message?: any, ...optionalParams: any[]) => {
      const logFn: LogMethod = isDebugMode ? (console.log || console.info || console.trace || noop) : noop;
      this._log = logFn.bind(console);
      this._log(message, optionalParams);
    }

    this._warn = (message?: any, ...optionalParams: any[]) => {
      const logFn: LogMethod = console.warn || console.log || console.info || console.trace || noop;
      this._warn = logFn.bind(console);
      this._warn(message, optionalParams);
    }

    this._error = (message?: any, ...optionalParams: any[]) => {
      const logFn: LogMethod = console.error || console.warn || console.log || console.info || conole.trace || noop;
      this._error = logFn.bind(console);
      this._error(message, optionalParams);
    }
  }

  get trace(): LogMethod { return this._trace; }
  get info(): LogMethod { return this._info; }
  get log(): LogMethod { return this._log; }
  get warn(): LogMethod { return this._warn; }
  get error(): LogMethod { return this._error; }
}

