import { Directive, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServerWebhooks } from './options.interface';

@Directive()
export abstract class AbstractOptionsDirective implements OnInit {

	serverForm: FormGroup;
	serverWebhooks: ServerWebhooks[] = [];
	allSyncKeys: string[] = [];
	allLocalKeys: string[] = [];

	textState: string[] = ['Waiting', 'Disapper']
	monitorForm: FormGroup;

	ngOnInit(): void {
		this.monitorForm = new FormGroup({
			'pageURL': new FormControl(null, [Validators.required, Validators.nullValidator]),
			'identifier': new FormControl(null, [Validators.required, Validators.nullValidator]),
			'textToSearch': new FormControl(null, [Validators.required, Validators.nullValidator]),
			'textState': new FormControl(null, [Validators.required, Validators.nullValidator])
		});

		this.serverForm = new FormGroup({
			serverName: new FormControl(null, [Validators.required, Validators.nullValidator]),
			webhookUrl: new FormControl(null, [Validators.required, Validators.nullValidator]),
		});
	}

	getAllSyncStorage() {
		chrome.storage.sync.get(null, function (items) {
			this.allSyncKeys = Object.keys(items);
		});
	}

	getAllLocalStorage() {
		chrome.storage.local.get(null, function (items) {
			this.allLocalKeys = Object.keys(items);
		});
	}

	logAllLocalKeys() {
		for (let key of this.allLocalKeys) {
			chrome.storage.sync.get(key, (value) => {
				console.log(value);
			});
		}
	}

	logAllSyncKeys() {
		for (let key of this.allSyncKeys) {
			chrome.storage.sync.get(key, (value) => {
				console.log(value);
			});
		}
	}

	clearChromeLocalStorage() {
		chrome.storage.sync.clear();
	}

	clearChromeSyncStorage() {
		chrome.storage.sync.clear();
	}

	getStatusChange() {
		chrome.storage.onChanged.addListener((action) => {
			console.log(action);
		});
	}
}
