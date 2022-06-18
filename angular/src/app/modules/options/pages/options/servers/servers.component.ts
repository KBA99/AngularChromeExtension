import { AfterContentChecked, AfterContentInit, Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServersService } from 'src/app/servers.service';
import { AbstractOptionsDirective } from '../../../abstract-options.directive';
import { ServerWebhooks } from '../../../options.interface';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.scss'],
})
export class ServersComponent extends AbstractOptionsDirective implements OnInit {

	constructor(
		protected readonly serversService: ServersService, 
		private _snackBar: MatSnackBar) {
		super();
	}

	openSnackBar(serverName: string) {
		this._snackBar.open((serverName ? serverName : '') + ' Removed From List', 'Close', {
			duration: 2000,
		});
	}

	ngOnInit(): void {
		this.serverForm = new FormGroup({
			serverName: new FormControl(null, [Validators.required, Validators.nullValidator]),
			webhookUrl: new FormControl(null, [Validators.required, Validators.nullValidator]),
		});
	}

	fetchAllServers() {
		console.log(this.serversService.allServers);
	}

	onAddServer() {
		if (!this.serverForm.valid) {
			return;
		}
		this.serversService.addServer(this.serverForm.value);
	}

	onDeleteServer(server: ServerWebhooks) {
		this.serversService.removeServer(server);
	}
}
