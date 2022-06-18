import { Injectable } from '@angular/core';
import { ServerWebhooks } from './modules/options/options.interface';

@Injectable({
	providedIn: 'root',
})
export class ServersService {
	allServers: ServerWebhooks[];

	constructor() {
		console.log('Servers service called!');
		chrome.storage.sync.get('servers', (result: { servers: ServerWebhooks[] }) => {
			this.allServers = result.servers;
		});
	}

	addServer(server: ServerWebhooks) {
		this.allServers.push(server);
		this.updateChromeServerList();
	}

	removeServer(server: ServerWebhooks) {
		this.allServers = this.allServers.filter((element) => {
			return element !== server;
		});
		this.updateChromeServerList();
	}

	updateChromeServerList() {
		//Use this method after updating allServers object to keep in sync with chrome
		chrome.storage.sync.set({ servers: this.allServers }, () => {
			console.log('Succesfully stored in chrome storage');
		});
	}
}
