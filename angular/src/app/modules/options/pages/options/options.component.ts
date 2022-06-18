import { Component } from '@angular/core';
import { AbstractOptionsDirective } from '../../abstract-options.directive';

@Component({
	selector: 'app-options',
	templateUrl: 'options.component.html',
	styleUrls: ['options.component.scss'],
})

export class OptionsComponent extends AbstractOptionsDirective {

	constructor(){
		super();
	}

}
