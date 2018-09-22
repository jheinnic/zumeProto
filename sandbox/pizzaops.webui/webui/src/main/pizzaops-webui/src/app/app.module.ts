import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { NgrxCacheModule, NgrxCache, apolloReducer } from 'apollo-angular-cache-ngrx';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PizzaopsWebuiEffects } from './pizzaops-webui.effects';
import { reducers, metaReducers } from './reducers';

@NgModule({
  imports: [
  ]
})

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, // provides HttpClient for HttpLink
    StoreModule.forRoot( {
	...reducers,
	apollo: apolloReducer
    }, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([PizzaopsWebuiEffects]),
    ApolloModule,
    NgrxCacheModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 constructor(ngrxCache: NgrxCache) {
    const cache = ngrxCache.create({});
  }
}
