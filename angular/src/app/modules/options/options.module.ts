import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OptionsRoutingModule } from './options-routing.module';
import { OptionsComponent } from './pages/options/options.component';
import { ServersComponent } from './pages/options/servers/servers.component';

@NgModule({
	declarations: [OptionsComponent, ServersComponent],
	imports: [CommonModule, OptionsRoutingModule, ReactiveFormsModule],
})
export class OptionsModule {}
