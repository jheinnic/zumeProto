import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';
import {
  FlexSpacerDirective, LayoutComponent, NavItemComponent, NoContentComponent, SidenavPanelComponent
} from './layout-util';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const COMPONENTS = [
  FlexSpacerDirective,
  NavItemComponent,
  NoContentComponent,
  LayoutComponent,
  SidenavPanelComponent
];

export const IMPORTS = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  FlexLayoutModule
];

@NgModule({
  imports: IMPORTS,
  declarations: COMPONENTS,
  exports: [...COMPONENTS, ...IMPORTS]
})
export class SharedModule {}
