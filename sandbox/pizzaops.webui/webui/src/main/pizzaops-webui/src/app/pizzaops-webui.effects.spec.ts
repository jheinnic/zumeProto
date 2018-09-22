import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PizzaopsWebuiEffects } from './pizzaops-webui.effects';

describe('PizzaopsWebuiService', () => {
  let actions$: Observable<any>;
  let effects: PizzaopsWebuiEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PizzaopsWebuiEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(PizzaopsWebuiEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
