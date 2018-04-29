import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';


@NgModule({
    imports: [
      MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule,
      MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSelectModule,
      MatProgressSpinnerModule, MatSidenavModule, MatTabsModule, MatToolbarModule, MatTooltipModule
    ],
    exports: [
      MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule,
      MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSelectModule,
      MatProgressSpinnerModule, MatSidenavModule, MatTabsModule, MatToolbarModule, MatTooltipModule
    ]
})
export class MaterialModule {
}
