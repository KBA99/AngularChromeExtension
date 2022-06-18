import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AbstractOptionsDirective } from '../../../abstract-options.directive';
import { ServerWebhooks } from '../../../options.interface';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.scss'],
})
export class ServersComponent extends AbstractOptionsDirective implements OnInit {
	serversObject: {};
	constructor(private _snackBar: MatSnackBar) {
		super();
	}

	allServers: ServerWebhooks[];

	openSnackBar(serverName: string) {
		this._snackBar.open((serverName ? serverName : '') + ' Removed From List', 'Close', {
			duration: 2000,
		});
	}

	ngOnInit(): void {
		chrome.storage.sync.get('servers', (result: { servers: ServerWebhooks[] }) => {
			this.allServers = result.servers;
		});

		this.serverForm = new FormGroup({
			serverName: new FormControl(null, [Validators.required, Validators.nullValidator]),
			webhookUrl: new FormControl(null, [Validators.required, Validators.nullValidator]),
		});
	}

	fetchAllServers() {
		console.log(this.allServers);
	}

	onAddServer() {
		if(!this.serverForm.valid) {
			return
		}
		this.allServers.push(this.serverForm.value);
		this.updateChromeServerList();
	}

	onDeleteServer(server: ServerWebhooks) {
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
