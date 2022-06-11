import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { serverWebhooks } from '../../options.interface';

@Component({
	selector: 'app-options',
	templateUrl: 'options.component.html',
	styleUrls: ['options.component.scss'],
})

export class OptionsComponent implements OnInit {

	constructor(){
	}

	textState: string[] = ['present', 'removed']
	webhookServers: serverWebhooks[] = []

	optionsForm: FormGroup;
	monitorForm: FormGroup;

	ngOnInit(): void {
		this.optionsForm = new FormGroup({
			'webhookUrl': new FormControl(null),
			'serverName': new FormControl(null),
		});

		this.monitorForm = new FormGroup({
			'pageURL': new FormControl(null),
			'identifier': new FormControl(null),
			'textToSearch': new FormControl(null),
			'textState': new FormControl(null)
		});
	}

	onUpdateWebhook() {
		this.webhookServers.push(this.optionsForm.value)
		console.log(this.optionsForm.value)
	}
	
	onSubmitMonitorConfig() {
		console.log(this.monitorForm)
	}
}
