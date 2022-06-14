import { Directive } from '@angular/core';

@Directive()
export abstract class AbstractOptionsDirective {
	allKeys: string[] = [];

	getAllSyncStorage() {
		chrome.storage.sync.get(null, function (items) {
			console.log(items);
			this.allKeys = Object.keys(items);
		});
	}

	getAllLocalStorage() {
		chrome.storage.local.get(null, function (items) {
			console.log(items);
			this.allKeys = Object.keys(items);
		});
	}

	logAllKeys() {
		for (let key of this.allKeys) {
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
