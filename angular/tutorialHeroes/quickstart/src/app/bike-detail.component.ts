import { Component } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Bike } from './bike';

export class BikeDetailComponent{
}

@Component({
	selector: 'bike-detail',
})

@Component({
	selector: 'my-app',
	template: `
		<div *ngIf="selectedBike">
			<h2>{{selectedBike.name}} {{selectedBike.brand}} details!</h2>
			<div><label>id: </label>{{selectedBike.id}}</div>
			<div>
					<label>brand: </label>
					<input [(ngModel)]="selectedBike.brand" placeholder="brand"/>
					<label>name: </label>
					<input [(ngModel)]="selectedBike.name" placeholder="name"/>
			</div>
		</div>`
})

bike: Bike;