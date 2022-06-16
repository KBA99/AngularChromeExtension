import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractOptionsDirective } from '../../abstract-options.directive';
import { serverWebhooks } from '../../options.interface';

@Component({
	selector: 'app-options',
	templateUrl: 'options.component.html',
	styleUrls: ['options.component.scss'],
})

export class OptionsComponent extends AbstractOptionsDirective implements OnInit {

	constructor(){
		super();
	}

	
	onSubmitMonitorConfig() {
		console.log(this.monitorForm.value)
		chrome.storage.sync.set({[this.allKeys.length+1]: this.monitorForm.value}, () => {
			console.log('Succesfully stored in chrome storage')
		})
		this.getAllSyncStorage()
	}
}
