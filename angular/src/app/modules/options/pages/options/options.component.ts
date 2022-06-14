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

	textState: string[] = ['Waiting', 'Disapper']
	optionsForm: FormGroup;
	monitorForm: FormGroup;

	ngOnInit(): void {
		this.monitorForm = new FormGroup({
			'pageURL': new FormControl(null, [Validators.required, Validators.nullValidator]),
			'identifier': new FormControl(null, [Validators.required, Validators.nullValidator]),
			'textToSearch': new FormControl(null, [Validators.required, Validators.nullValidator]),
			'textState': new FormControl(null, [Validators.required, Validators.nullValidator])
		});
	}
	
	onSubmitMonitorConfig() {
		console.log(this.monitorForm.value)
		chrome.storage.sync.set({[this.allKeys.length+1]: this.monitorForm.value}, () => {
			console.log('Succesfully stored in chrome storage')
		})
		this.getAllSyncStorage()
	}
}
