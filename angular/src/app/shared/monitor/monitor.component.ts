import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractOptionsDirective } from 'src/app/modules/options/abstract-options.directive';
import { MonitorService } from 'src/app/monitor.service';
import { MonitorConfig } from './monitor.interface';

@Component({
	selector: 'app-monitor',
	templateUrl: './monitor.component.html',
	styleUrls: ['./monitor.component.scss'],
})
export class MonitorComponent extends AbstractOptionsDirective implements OnInit {
	monitorForm: FormGroup;

	constructor(readonly monitorService: MonitorService) {
		super();
	}

	ngOnInit(): void {
		this.monitorForm = new FormGroup({
			label: new FormControl(null, [Validators.required, Validators.nullValidator]),
			pageURL: new FormControl(null, [Validators.required, Validators.nullValidator]),
			identifier: new FormControl(null, [Validators.required, Validators.nullValidator]),
			textToSearch: new FormControl(null, [Validators.required, Validators.nullValidator]),
			isTextOnPage: new FormControl(null, [Validators.required, Validators.nullValidator]),
		});
	}

	onAddMonitorConfig() {
		if (!this.monitorForm.valid) {
			return;
		}
		this.monitorService.addMonitorConfig(this.monitorForm.value)
	}

	onDeleteMonitorConfig(config: MonitorConfig) {
		this.monitorService.deleteMonitorConfig(config)
	}
}
