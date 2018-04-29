import {InjectionToken} from '@angular/core';
import {HttpLink} from 'apollo-link-http';

export const APOLLO_HTTP_LINK = new InjectionToken<HttpLink>('ApolloHttpLink');
export const NEO4J_HTTP_LINK = new InjectionToken<HttpLink>('Neo4JHttpLink');

export const NGRX_APOLLO_CACHE = new InjectionToken<Cache>('NgrxCache');
export const IN_MEMORY_APOLLO_CACHE = new InjectionToken<Cache>('InMemoryCache');
