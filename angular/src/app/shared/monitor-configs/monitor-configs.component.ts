import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MonitorService } from 'src/app/monitor.service';
import { MonitorComponent } from '../monitor/monitor.component';

@Component({
	selector: 'app-monitor-configs',
	templateUrl: './monitor-configs.component.html',
	styleUrls: ['./monitor-configs.component.scss'],
})
export class MonitorConfigsComponent extends MonitorComponent implements OnInit {
	constructor(override readonly monitorService: MonitorService) {
		super(monitorService);
	}

	@ViewChild(MatAccordion) accordion: MatAccordion;

	onStartMonitor() {}

}
