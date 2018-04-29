// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import {enableDebugTools} from '@angular/platform-browser';
import {ApplicationRef, NgModuleRef} from '@angular/core';
import {AppModule} from '../app/app.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ConfigurationOptions, EnvironmentType} from './environment.all';

export function _decorateModuleRef(modRef: NgModuleRef<AppModule>)
{
  const appRef = modRef.injector.get(ApplicationRef);
  const cmpRef = appRef.components[0];
  const _ng = (<any>window).ng;

  enableDebugTools(cmpRef);
  (<any>window).ng.probe = _ng.probe;
  (<any>window).ng.coreTokens = _ng.coreTokens;

  return modRef;
}

// export const config = ConfigurationOptions.build(bldr => {
//   bldr.appBaseUrl('http://portfolio.dev.jchein.name:8888')
//     .apiGatewayUrl('http://portfolio.dev.jchein.name:8080')
//     .keycloakConfigPath('/assets/old_keycloak.json');
// });

export const environment: EnvironmentType = {
  production: false,
  isDebugMode: true,
  decorateModuleRef: _decorateModuleRef,
  extraImports: [
    StoreDevtoolsModule.instrument({
      maxAge: 40 //  Retains last 40 states
    })
  ],
  providers: [
    // Custom providers for development
  ],
  config: {
    appBaseUrl: 'http://portfolio.dev.jchein.name:8888',
    apiGatewayUrl: 'https://portfolio.dev.jchein.name:8243/apiman-gateway',
    apolloGraphQueryUrl: 'http://portfolio.dev.jchein.name:3000/graphql',
    neo4jGraphQueryUrl: 'http://portfolio.dev.jchein.name:27474/graphql/',
    graphSubscribeUrl: 'ws://portfolio.dev.jchein.name:27474/graphql/',
    keycloakConfigPath: '/assets/keycloak.json'
  } as ConfigurationOptions
};
