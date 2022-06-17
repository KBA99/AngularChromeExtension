import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { OptionsRoutingModule } from './options-routing.module';
import { OptionsComponent } from './pages/options/options.component';
import { ServersComponent } from './pages/options/servers/servers.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
	declarations: [OptionsComponent, ServersComponent],
	imports: [
		CommonModule,
		OptionsRoutingModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatSelectModule,
		MatRadioModule,
		MatCardModule,
		MatDividerModule,
		MatInputModule,
		MatTabsModule,
		MatIconModule,
		MatSnackBarModule,
		MatCheckboxModule,
		MatButtonModule,

		// Component


		// MatAutocompleteModule,
		// MatDatepickerModule,
		// MatSelectModule,
		// MatSliderModule,
		// MatSlideToggleModule,
		// MatMenuModule,
		// MatSidenavModule,
		// MatToolbarModule,
		// MatListModule,
		// MatGridListModule,
		// MatStepperModule,
		// MatExpansionModule,
		// MatButtonToggleModule,
		// MatChipsModule,
		// MatProgressSpinnerModule,
		// MatProgressBarModule,
		// MatDialogModule,
		// MatTooltipModule,
		// MatTableModule,
		// MatSortModule,
		// MatPaginatorModule,
		// OptionsRoutingModule,
	],
})
export class OptionsModule {}
