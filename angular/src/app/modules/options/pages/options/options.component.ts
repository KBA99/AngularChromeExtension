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

	textState: string[] = ['Waiting', 'Disapper']
	webhookServers: serverWebhooks[] = []
	allKeys: string[] = []

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
		const serverName = this.optionsForm.value.serverName
		const webhookUrl =  this.optionsForm.value.webhookUrl

		chrome.storage.sync.set({[serverName]: webhookUrl}, () => {
			console.log('Succesfully stored in chrome storage')
		})

		console.log("updated")
		this.getAllLocalStorageKeys()
		console.log(this.allKeys)

		for(let key of this.allKeys) {
			chrome.storage.sync.get(key, () => {
				console.log("succesfully got key")
			})
		}
	}
	
	onSubmitMonitorConfig() {
		console.log(this.monitorForm.value)
		chrome.storage.sync.set({[this.allKeys.length+1]: this.monitorForm.value}, () => {
			console.log('Succesfully stored in chrome storage')
		})
		this.getAllLocalStorageKeys()
	}

	getAllLocalStorageKeys() {
		chrome.storage.sync.get(null, function(items) {
			this.allKeys = Object.keys(items);
			console.log(this.allKeys);

			for(let key of this.allKeys) {
				chrome.storage.sync.get(key, (value) => {
					console.log(value)
				})
			}
		});
	}
}
