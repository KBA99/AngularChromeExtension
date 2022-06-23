import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { MonitorConfigsComponent } from './monitor-configs/monitor-configs.component';
import { MonitorComponent } from './monitor/monitor.component';

@NgModule({
	imports: [
        ReactiveFormsModule,
        MaterialModule,
        CommonModule
	],
	declarations: [MonitorComponent, MonitorConfigsComponent],
	exports: [MonitorComponent, MonitorConfigsComponent],
})
export class SharedModule {}
