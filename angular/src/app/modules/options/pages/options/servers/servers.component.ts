import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AbstractOptionsDirective } from '../../../abstract-options.directive';
import { ServerWebhooks } from '../../../options.interface';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.scss'],
})
export class ServersComponent extends AbstractOptionsDirective implements OnInit, AfterViewInit {
	serversObject: {};
	constructor() {
		super();
	}

	allServers: ServerWebhooks[];

	ngAfterViewInit(): void {
		console.log('Firing off');
		chrome.storage.sync.get('servers', (result: { servers: ServerWebhooks[] }) => {
			this.allServers = result.servers;
		});
		console.log(this.allServers);
	}

	override ngOnInit(): void {
		super.ngOnInit();
	}

	fetchAllServers() {
		console.log(this.allServers);
	}

	onUpdateWebhook() {
		this.allServers.push(this.serverForm.value);
		this.updateChromeServerList();
	}

	onDeleteServer(server: ServerWebhooks) {
		this.allServers = this.allServers.filter((element) => {
			return element !== server;
		});
		this.updateChromeServerList();
	}

	updateChromeServerList() { //Use this method after updating allServers object to keep in sync with chrome
		chrome.storage.sync.set({ servers: this.allServers }, () => {
			console.log('Succesfully stored in chrome storage');
		});
	}
}
