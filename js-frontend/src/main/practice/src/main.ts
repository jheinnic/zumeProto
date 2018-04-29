import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {bootstrapKeycloak} from './environments/environment.all';
import {environment} from './environments/environment';
import {AppModule} from './app/app.module';
// import 'angular-async-local-storage';
import 'hammerjs';

// import "./assets/css/app.scss";
// import "bootstrap/scss/bootstrap.scss";
// import "./assets/css/bootstrap/custom.scss";
// import "./assets/css/ng-material/app.theme.scss";

//
// Bootstrap our Angular app with a top level NgModule
//
function main(): void
{
  platformBrowserDynamic(environment.providers)
    .bootstrapModule(AppModule)
    .then(environment.decorateModuleRef)
    .then(bootstrapKeycloak)
    .catch(err => console.error(err));
}

function __domReadyHandler()
{
  document.removeEventListener('DOMContentLoaded', __domReadyHandler);
  main();
}

switch (document.readyState) {
  case 'loading':
    document.addEventListener('DOMContentLoaded', __domReadyHandler);
    break;
  case 'interactive':
  case 'complete':
  default:
    main();
}

