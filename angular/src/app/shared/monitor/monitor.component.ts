import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractOptionsDirective } from 'src/app/modules/options/abstract-options.directive';
import { MonitorConfig } from './monitor.interface';

@Component({
	selector: 'app-monitor',
	templateUrl: './monitor.component.html',
	styleUrls: ['./monitor.component.scss'],
})
export class MonitorComponent extends AbstractOptionsDirective implements OnInit {

	allMonitorConfigs: MonitorConfig[] = []
	monitorForm: FormGroup;

	constructor() {
		super();
	}

	ngOnInit(): void {
		this.monitorForm = new FormGroup({
			pageURL: new FormControl(null, [Validators.required, Validators.nullValidator]),
			identifier: new FormControl(null, [Validators.required, Validators.nullValidator]),
			textToSearch: new FormControl(null, [Validators.required, Validators.nullValidator]),
			isTextOnPage: new FormControl(null, [Validators.required, Validators.nullValidator]),
		});
	}

	onAddMonitorConfig() {
		if(!this.monitorForm.valid) {
			return
		}
		this.allMonitorConfigs.push(this.monitorForm.value);
		this.updateChromeMonitorList();
	}

	updateChromeMonitorList() {
		//Use this method after updating allServers object to keep in sync with chrome
		chrome.storage.sync.set({ monitor: this.allMonitorConfigs }, () => {
			console.log('Succesfully stored in chrome storage');
		});
	}


	onDeleteMonitorConfig(monitor: MonitorConfig) {
		this.allMonitorConfigs = this.allMonitorConfigs.filter((element) => {
			return element !== monitor;
		});
		this.updateChromeMonitorList();
	}
}
