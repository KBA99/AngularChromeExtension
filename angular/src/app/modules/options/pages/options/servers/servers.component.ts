import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AbstractOptionsDirective } from '../../../abstract-options.directive';
import { ServerWebhooks } from '../../../options.interface';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.scss'],
})
export class ServersComponent extends AbstractOptionsDirective implements OnInit, AfterViewInit {
	serversObject: {}
	constructor() {
		super();
	}

	allServers: ServerWebhooks[]

	ngAfterViewInit(): void {
		console.log("Firing off")
		chrome.storage.sync.get('servers', (result: {servers: ServerWebhooks[]}) => {
			this.allServers = result.servers
		});
	}

	override ngOnInit(): void {
		super.ngOnInit()
	}

	fetchAllServers() {
		console.log(this.allServers)
	}

	onUpdateWebhook() {
		this.allServers.push(this.serverForm.value)
		chrome.storage.sync.set({servers: this.allServers}, () => {
			console.log('Succesfully stored in chrome storage');
		});

		this.getAllSyncStorage();
	}
}
