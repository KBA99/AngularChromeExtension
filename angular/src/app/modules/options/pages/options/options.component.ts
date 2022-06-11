import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
			'serverName': new FormControl(null, [Validators.required, Validators.nullValidator]),
			'webhookUrl': new FormControl(null, [Validators.required, Validators.nullValidator]),
		});

		this.monitorForm = new FormGroup({
			'pageURL': new FormControl(null, [Validators.required, Validators.nullValidator]),
			'identifier': new FormControl(null, [Validators.required, Validators.nullValidator]),
			'textToSearch': new FormControl(null, [Validators.required, Validators.nullValidator]),
			'textState': new FormControl(null, [Validators.required, Validators.nullValidator])
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
