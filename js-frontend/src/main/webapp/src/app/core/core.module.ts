import {ModuleWithProviders, NgModule} from '@angular/core';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
// import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
// import {HttpModule} from '@angular/http';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {DBModule} from '@ngrx/db';
import {ConsoleListener, LOG_LISTENER, LogModule, LogServiceFactory} from 'ng2-log-service';

import {
  API_GATEWAY_URL, KEYCLOAK_CONFIG_URL, LOGIN_RETURN_URI, LOGOUT_RETURN_URI
} from '../../environments/environment.all';
import {environment} from '../../environments/environment';
import {schema} from './db-schema.object';

import {MaterialModule} from '../shared/material.module';
import {CoreRoutingModule} from './core-routing.module';
import {
  AppRootComponent, ErrorModalComponent, LoginModalComponent, MaskingOverlayComponent,
  PageNotFoundComponent, ReturnFromLoginComponent, TopToolbarComponent
} from './layout';
import {
  AuthenticatedGuard, KEYCLOAK_INTERNAL_HELPERS, KeycloakHttpInterceptor, KeycloakRegistry,
  KeycloakRegistryEntry
} from './identity';
import {MyConsoleListenerConfig} from './logging/my-console-listener-config.service';
import {CoreIdentityEffects, CoreReducer} from './feature';
import {SharedModule} from '../shared/shared.module';
import {LoginDepartureGuard} from './identity/login-departure.guard';
import {KeycloakApolloLink} from './identity/keycloak-apollo-link.service';
// import {NgrxCacheModule} from '@kamilkisiela/apollo-angular-cache-ngrx';
import {NgrxCacheModule} from './apollo/NgrxCacheModule';

export const COMPONENTS = [
  AppRootComponent,
  ErrorModalComponent,
  LoginModalComponent,
  ReturnFromLoginComponent,
  TopToolbarComponent,
  MaskingOverlayComponent,
  PageNotFoundComponent
];
export const PROVIDERS = [
  {
    provide: APP_BASE_HREF,
    useValue: environment.config.appBaseUrl
  },
  {
    provide: API_GATEWAY_URL,
    useValue: environment.config.apiGatewayUrl
  },
  {
    provide: LOGIN_RETURN_URI,
    useValue: environment.config.defaultPostLoginRoute
  },
  {
    provide: LOGOUT_RETURN_URI,
    useValue: environment.config.defaultPostLogoutRoute,
  },
  {
    provide: KEYCLOAK_CONFIG_URL,
    useValue: environment.config.keycloakConfigPath
  },
  {
    provide: KeycloakRegistryEntry,
    useFactory: defaultKeycloakAdapter,
    deps: [APP_BASE_HREF, KEYCLOAK_CONFIG_URL],
    multi: true
  },
  {
    provide: KEYCLOAK_INTERNAL_HELPERS,
    useExisting: KeycloakHttpInterceptor,
    multi: true
  },
  {
    provide: KEYCLOAK_INTERNAL_HELPERS,
    useExisting: KeycloakApolloLink,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useExisting: KeycloakHttpInterceptor,
    multi: true
  },
  {
    provide: LOG_LISTENER,
    useClass: ConsoleListener,
    multi: true,
    deps: [MyConsoleListenerConfig]
  },
  KeycloakHttpInterceptor,
  KeycloakApolloLink,
  KeycloakRegistry,
  // AuthenticatedLoginGuard,
  AuthenticatedGuard,
  LoginDepartureGuard,
  LogServiceFactory,
  MyConsoleListenerConfig
];

@NgModule({
  imports: [CommonModule]
})
export class CoreModule
{
  static forRoot(): ModuleWithProviders
  {
    return {
      ngModule: RootCoreModule,
      providers: PROVIDERS
    };
  }
}

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientXsrfModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule,
    // ReactiveFormsModule,
    LogModule,
    DBModule.provideDB(schema),
    NgrxCacheModule,
    StoreModule.forFeature(CoreReducer.featureKey, CoreReducer.reducerMap, CoreReducer.reducerOptions),
    EffectsModule.forFeature([CoreIdentityEffects]),
    CoreRoutingModule
  ],
  declarations: [...COMPONENTS],
  entryComponents: COMPONENTS,
  exports: COMPONENTS
})
export class RootCoreModule
{
}

export function defaultKeycloakAdapter(appBaseHref: string, keycloakConfigPath: string)
{
  console.log('Registering default keycloak adapter config');
  return new KeycloakRegistryEntry(
    'default', appBaseHref, appBaseHref + keycloakConfigPath, appBaseHref);
}
