import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import {LandingPageComponent} from './landing-page.component';

const COMPONENTS = [LandingPageComponent]

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule
  ],
  declarations: COMPONENTS
})
export class InventoryModule { }
