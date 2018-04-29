import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './landing-page.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'prefix',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: LandingPageComponent,
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
