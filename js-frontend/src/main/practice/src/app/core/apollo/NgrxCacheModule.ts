import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {NgrxCache} from './NgrxCache';
import {apolloReducer} from './store/reducer';
import {NGRX_APOLLO_CACHE} from '../../app.di';

export const PROVIDERS = [
  NgrxCache,
  {
    provide: NGRX_APOLLO_CACHE,
    useFactory: provideNgrxCache,
    deps: [NgrxCache]
  }
];

export function provideNgrxCache(ngrxCache: NgrxCache)
{
  return ngrxCache.create({
    addTypename: true,
    dataIdFromObject: (obj: any) => `${obj.__typename ? obj.__typename : 'obj'}:${obj.name ? obj.name : obj.id}`
  })
}

@NgModule({
  providers: PROVIDERS,
  imports: [
    StoreModule.forFeature('apollo', {
      apollo: apolloReducer
    }, {
      initialState: {}
    })
  ]
})
export class NgrxCacheModule {}
