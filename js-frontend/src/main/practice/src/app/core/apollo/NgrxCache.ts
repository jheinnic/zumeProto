import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Cache } from './Cache';
import { ApolloReducerConfig } from './types';

@Injectable()
export class NgrxCache {
  constructor(private store: Store<any>) {}

  create(options?: ApolloReducerConfig): Cache {
    return new Cache(this.store, options);
  }
}
