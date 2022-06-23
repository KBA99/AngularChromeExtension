import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OptionsComponent } from './pages/options/options.component';
import { ServersComponent } from './pages/options/servers/servers.component';
import { SharedModule } from '../shared/shared-module';
import { MaterialModule } from '../shared/material.module';
import { CommonModule } from '@angular/common';
import { OptionsRoutingModule } from './options-routing.module';

@NgModule({
	declarations: [OptionsComponent, ServersComponent],
	imports: [
		SharedModule,
		MaterialModule,
		ReactiveFormsModule,
		CommonModule,
		OptionsRoutingModule,
	],
})
export class OptionsModule {}
