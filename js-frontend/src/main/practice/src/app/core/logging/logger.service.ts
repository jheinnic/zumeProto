import { Injectable } from '@angular/core';
import {Logger} from './logger.interface';

@Injectable()
export class LoggerService implements Logger {

  debug: any;
  info: any;
  warn: any;
  error: any;

  invokeConsoleMethod(type: string, args?: any): void {}
}
