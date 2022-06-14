import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractOptionsDirective } from '../../../abstract-options.directive';
import { serverWebhooks } from '../../../options.interface';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.scss'],
})
export class ServersComponent extends AbstractOptionsDirective implements OnInit {
	constructor() {
		super();
	}

	optionsForm: FormGroup;
	webhookServers: serverWebhooks[] = [];

	ngOnInit(): void {
		this.optionsForm = new FormGroup({
			serverName: new FormControl(null, [Validators.required, Validators.nullValidator]),
			webhookUrl: new FormControl(null, [Validators.required, Validators.nullValidator]),
		});
	}

	fetchAllServers() {
		chrome.storage.sync.get('servers', (result) => {
			console.log(result);
		});
	}

	onUpdateWebhook() {

		chrome.storage.sync.set({ }, () => {
			console.log('Succesfully stored in chrome storage');
		});

		console.log('updated');
		this.getAllSyncStorage();
		console.log(this.allKeys);

		for (let key of this.allKeys) {
			chrome.storage.sync.get(key, () => {
				console.log('succesfully got key');
			});
		}
	}
}
