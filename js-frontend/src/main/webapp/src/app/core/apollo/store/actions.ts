import { Action } from '@ngrx/store';

import { NormalizedCache } from '../types';

export const WRITE_STORE = '[Apollo] Write Store';

export class WriteStore implements Action {
  readonly type = WRITE_STORE;
  constructor(public payload: NormalizedCache) {}
}

export type Actions = WriteStore;
