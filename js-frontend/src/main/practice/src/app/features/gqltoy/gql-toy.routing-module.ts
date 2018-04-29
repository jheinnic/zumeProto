import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {GqlToyComponent} from './gql-toy.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'prefix',
        // canActivateChildren: [AuthenticateChildrenGuard],
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: GqlToyComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class GqlToyRoutingModule
{
}
