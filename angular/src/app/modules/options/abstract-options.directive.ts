import { Directive } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServerWebhooks } from './options.interface';

@Directive()
export abstract class AbstractOptionsDirective {
	serverForm: FormGroup;

	serverWebhooks: ServerWebhooks[] = [];
	allSyncKeys: string[] = [];
	allLocalKeys: string[] = [];

	textState: string[] = ['Waiting', 'Disapper'];

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
