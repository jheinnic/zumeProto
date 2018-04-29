import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ApolloModule} from 'apollo-angular';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {NgrxCache} from './core/apollo/NgrxCache';

import {EffectsModule} from '@ngrx/effects';
import {StoreModule, Store} from '@ngrx/store';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomRouterStateSerializer} from './custom-router-state-serializer.class';

import {CoreModule} from './core/core.module';
import {AppRootComponent} from './core/layout/app-root.component';
import {AppRoutingModule} from './app-routing.module';
import {environment} from '../environments/environment';
import {metaReducers, reducerMap} from './root-feature.reducer';
import {APOLLO_HTTP_LINK, IN_MEMORY_APOLLO_CACHE, NEO4J_HTTP_LINK, NGRX_APOLLO_CACHE} from './app.di';
import {NgrxCacheModule} from './core/apollo/NgrxCacheModule';

// by default, this client will send queries to `/graphql` (relative to the URL of your app)
export function provideInMemoryCache()
{
  return new InMemoryCache()
}

export function provideApolloHttpLink()
{
  return new HttpLink({
    uri: environment.config.apolloGraphQueryUrl,
    includeExtensions: true
  });
}

export function provideNeo4jHttpLink()
{
  return new HttpLink({
    uri: environment.config.neo4jGraphQueryUrl,
    includeExtensions: true
  });
}

/*
export function provideClient(
  apollo: Apollo,
  keycloakLink: KeycloakApolloLink,
  httpLink: HttpLink,
  cache: InMemoryCache): ApolloBase<UsersQuery>
{
  apollo.createDefault({
    link: keycloakLink.concat(httpLink),
    cache: cache
  });
  return apollo.default()
}
*/

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducerMap, {metaReducers}),
    StoreRouterConnectingModule,

    /**
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
    EffectsModule.forRoot([]),

    /**
     * GraphQL support
     */
    ApolloModule,
    NgrxCacheModule,

    /**
     * To use the debugger, install the Redux DevTools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    environment.extraImports,

    CoreModule.forRoot(),
    AppRoutingModule,
  ],
  declarations: [],
  providers: [
    /**
     * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
     * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
     * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
     */
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer
    },
    {
      provide: APOLLO_HTTP_LINK,
      useFactory: provideApolloHttpLink
    },
    {
      provide: NEO4J_HTTP_LINK,
      useFactory: provideNeo4jHttpLink
    },
    {
      provide: IN_MEMORY_APOLLO_CACHE,
      useFactory: provideInMemoryCache
    }
    // {
    //   provide: ApolloBase,
    //   useFactory: provideClient,
    //   deps: [Apollo, HttpLink, KeycloakApolloLink, InMemoryCache]
    // }
  ],
  entryComponents: [],
  bootstrap: [AppRootComponent]
})
export class AppModule
{
}

