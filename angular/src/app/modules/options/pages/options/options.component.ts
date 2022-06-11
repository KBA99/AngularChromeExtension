import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-options',
	templateUrl: 'options.component.html',
	styleUrls: ['options.component.scss'],
})
export class OptionsComponent implements OnInit {
	textState: string[] = ['present', 'removed']

	optionsForm: FormGroup;
	monitorForm: FormGroup;

	ngOnInit(): void {
		this.optionsForm = new FormGroup({
			'webhookUrl': new FormControl(null),
		});

		this.monitorForm = new FormGroup({
			'pageURL': new FormControl(null),
			'identifier': new FormControl(null),
			'textToSearch': new FormControl(null),
			'textState': new FormControl(null)
		});
	}

	
}
