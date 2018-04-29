import {enableProdMode, NgModuleRef} from '@angular/core';
import {disableDebugTools} from '@angular/platform-browser';
import {AppModule} from '../app/app.module';
import {ConfigurationOptions, EnvironmentType} from './environment.all';

// export const config = ConfigurationOptions.build(bldr => {
//   bldr.appBaseUrl('http://portfolio.jchein.name')
//     .apiGatewayUrl('https://api.jchein.name')
//     .keycloakConfigPath('/assets/keycloak.json');
// });

export const environment: EnvironmentType = {
  production: true,
  isDebugMode: false,
  decorateModuleRef: (modRef: NgModuleRef<AppModule>) => {
    enableProdMode();
    disableDebugTools();

    return modRef;
  },
  extraImports: [],
  providers: [],
  config: {
    appBaseUrl: 'http://portfolio.jchein.name',
    apiGatewayUrl: 'https://api.jchein.name/apiman',
    apolloGraphQueryUrl: 'http://graphql.jchein.name/graphql',
    neo4jGraphQueryUrl: 'http://graphql.jchein.name/graphql',
    graphSubscribeUrl: 'ws://graphql.jchein.name/graphql',
    keycloakConfigPath: '/assets/keycloak.json'
  }
};

