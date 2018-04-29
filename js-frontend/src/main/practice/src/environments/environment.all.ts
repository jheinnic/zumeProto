import {InjectionToken, ModuleWithProviders, NgModuleRef, StaticProvider, Type} from '@angular/core';
import {Store} from '@ngrx/store';
import {CoreIdentityActions, CoreReducer} from '../app/core/feature';
import {AppModule} from '../app/app.module';

export type AppDecorator = (modRef: NgModuleRef<AppModule>) => any;

export interface EnvironmentType
{
  production: boolean;
  isDebugMode: boolean;
  decorateModuleRef: AppDecorator,
  extraImports: Array<Type<any> | ModuleWithProviders | any[]>
  providers: StaticProvider[],
  config: ConfigurationOptions
}

export function bootstrapKeycloak(modRef: NgModuleRef<AppModule>)
{
  const store: Store<CoreReducer.State> = modRef.injector.get(Store); // <CoreReducer.State>);
  store.dispatch(
    new CoreIdentityActions.BootstrapAuthenticationClient({adapterName: 'default'})
  );
}


export const CHANCE = new InjectionToken<string>('chance');
export const API_GATEWAY_URL = new InjectionToken<string>('API_GATEWAY_URL');
export const APP_BASE_URL = new InjectionToken<string>('APP_BASE_URI');
export const KEYCLOAK_CONFIG_URL = new InjectionToken<string>('KEYCLOAK_CONFIG_URI');
// export const ANONYMOUS_SESSION_RETURN_URI = new InjectionToken<string>('ANONYMOUS_SESSION_RETURN_URI');
// export const ANONYMOUS_ERROR_RETURN_URI = new InjectionToken<string>('ANONYMOUS_ERROR_RETURN_URI');
export const LOGIN_RETURN_URI = new InjectionToken<string>('LOGIN_SUCCESS_RETURN_URI');
// export const SIGNUP_RETURN_URI = new InjectionToken<string>('SIGNUP_SUCCESS_RETURN_URI');
// export const LOGIN_FAILURE_RETURN_URI = new InjectionToken<string>('LOGIN_FAILURE_RETURN_URI');
// export const LOGIN_ERROR_RETURN_URI = new InjectionToken<string>('LOGIN_ERROR_RETURN_URI');
export const LOGOUT_RETURN_URI = new InjectionToken<string>('LOGOUT_RETURN_URI');
export const RETRY_BACKOFF_DELAY = new InjectionToken<number>('RETRY_BACKOFF_DELAY');
export const RETRY_COUNT = new InjectionToken<number>('RETRY_COUNT');

const DEFAULT_KEYCLOAK_CONFIG_PATH = '/assets/keycloak.json';
// const DEFAULT_LOGIN_RETURN_URI = '/session/auth';
// const DEFAULT_LOGOUT_RETURN_URI = '/session/logout';
// const DEFAULT_ANONYMOUS_LANDING_URI = '/session/visit';
// const DEFAULT_AUTHENTICATED_LANDING_URI = '/app/home';
// const DEFAULT_LOGIN_SUCCESS_TIMEOUT = 3750;
const DEFAULT_RETRY_BACKOFF_DELAY = 800;
const DEFAULT_RETRY_COUNT = 3;


// export type IConfigurationOptionsBuilder = SelfFluent<ConfigurationOptions>
//
// export const ConfigurationOptionsBuilder = (new Builder() as AutoBuilder<ConfigurationOptions>)
//   .cascade('appBaseUrl', appBaseUrl => obj => Object.assign(obj, {appBaseUrl}))
//   .cascade('apiGatewayUrl', apiGatewayUrl => obj => Object.assign(obj, {apiGatewayUrl}))
//   .cascade('keycloakConfigPath', keycloakConfigPath => obj => Object.assign(obj, {keycloakConfigPath}))
//   .cascade(
//     'defaultPostLoginRoute',
//     defaultPostLoginRoute => obj => Object.assign(obj, {defaultPostLoginRoute}))
//   .cascade(
//     'defaultPostLogoutRoute',
//     defaultPostLogoutRoute => obj => Object.assign(obj, {defaultPostLogoutRoute}))
//   .cascade(
//     'defaultPostSignupRoute',
//     defaultPostSignupRoute => obj => Object.assign(obj, {defaultPostSignupRoute}))
//   .cascade(
//     'defaultAnonymousRoute',
//     defaultAnonymousRoute => obj => Object.assign(obj, {defaultAnonymousRoute}))
//   .cascade(
//     'defaultRetriesAllowed',
//     defaultRetriesAllowed => obj => Object.assign(obj, {defaultRetriesAllowed}))
//   .cascade(
//     'defaultRetryBackoffMs',
//     defaultRetryBackoffMs => obj => Object.assign(obj, {defaultRetryBackoffMs}))
//   .value;

export interface ConfigurationOptions
{
  readonly appBaseUrl: string;

  readonly apiGatewayUrl: string;

  readonly apolloGraphQueryUrl: string;

  readonly neo4jGraphQueryUrl: string;

  readonly graphSubscribeUrl: string;

  readonly keycloakConfigPath?: string; // = DEFAULT_KEYCLOAK_CONFIG_PATH;

  readonly defaultPostLoginRoute?: string; // = '/';

  readonly defaultPostLogoutRoute?: string; // = '/';

  readonly defaultPostSignupRoute?: string; // = '/';

  readonly defaultAnonymousRoute?: string; // = '/';

  readonly defaultRetriesAllowed?: number; // = DEFAULT_RETRY_COUNT;

  readonly defaultRetryBackoffMs?: number; // = DEFAULT_RETRY_BACKOFF_DELAY;

  // static build(director: (builder: IConfigurationOptionsBuilder) => void)
  // {
  //   const builder = new ConfigurationOptionsBuilder(new ConfigurationOptions());
  //   director(builder);
  //   return builder.value;
  // }
}

