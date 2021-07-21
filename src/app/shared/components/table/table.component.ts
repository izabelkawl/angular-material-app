import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { map } from "rxjs/operators";
import { IRow } from './interfaces/IRow';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

	constructor(private http: HttpClient) { }

	basicUrl = 'https://jsonplaceholder.typicode.com/users';
	data: any = [];
	rows!: any[];
	columns!: any[];
	getData() {
		return this.http.get(this.basicUrl).subscribe(result => {

			this.data = result
			this.columns = Object.keys(this.data[0])
			this.rows = Object.values(this.data)
			for ( let i of this.rows){
				for( let j of this.columns){
					console.log(i[j])
					console.log('-----------------')
				}
			}
		})

		// // or to get the StudentData keys:
		// var objectKeys = Object.keys(value);
		// console.log(objectKeys);
		// }
		// 	// this.data = ValueConverter
		// 	this.rows = Object.values(value);
	}

	ngOnInit(): void {
		this.getData()
		console.log(this.data)
	}
}
