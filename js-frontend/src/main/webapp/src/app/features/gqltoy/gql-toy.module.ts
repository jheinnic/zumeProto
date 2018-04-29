import {SharedModule} from '../../shared/shared.module';

import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {GqlToyComponent} from './gql-toy.component';
import {CommonModule} from '@angular/common';
import {GqlToyRoutingModule} from './gql-toy.routing-module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     StoreModule.forFeature('gqltoy', reducerMap, {initialState}),
     */

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     EffectsModule.forFeature([BookEffects, CollectionEffects]),
     */
    GqlToyRoutingModule
  ],
  declarations: [GqlToyComponent]
})
export class GqlToyModule {}
