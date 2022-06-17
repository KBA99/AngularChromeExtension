import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractOptionsDirective } from 'src/app/modules/options/abstract-options.directive';

@Component({
	selector: 'app-monitor',
	templateUrl: './monitor.component.html',
	styleUrls: ['./monitor.component.scss'],
})
export class MonitorComponent extends AbstractOptionsDirective implements OnInit {

	monitorForm: FormGroup;

	constructor() {
		super();
	}

	ngOnInit(): void {
		this.monitorForm = new FormGroup({
			pageURL: new FormControl(null, [Validators.required, Validators.nullValidator]),
			identifier: new FormControl(null, [Validators.required, Validators.nullValidator]),
			textToSearch: new FormControl(null, [Validators.required, Validators.nullValidator]),
			textState: new FormControl(null, [Validators.required, Validators.nullValidator]),
		});

	}

	onSubmitMonitorConfig() {
		console.log(this.monitorForm.value);
		chrome.storage.sync.set({ [this.allSyncKeys.length + 1]: this.monitorForm.value }, () => {
			console.log('Succesfully stored in chrome storage');
		});
		this.getAllSyncStorage();
	}
}
