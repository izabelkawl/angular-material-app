import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	onSubmit() {
		// tslint:disable-next-line: no-console
		console.log('hehe');
	}
}
