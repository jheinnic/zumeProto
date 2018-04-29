import {Injectable} from '@angular/core';
import {ConsoleListenerConfig, LogLevel} from 'ng2-log-service';


@Injectable()
export class MyConsoleListenerConfig extends ConsoleListenerConfig
{
  constructor()
  {
    super();
    this.logLevel = LogLevel.All;
    this.prefixLogsWithNamespace = true;
    this.enabled = true;
    this.enablePrefix = false;
    this.prefix = () => 'JchPtf: ';
  }
}
