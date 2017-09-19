import {Component} from '@angular/core';
import {Bike} from './bike';

bikes: BIKE[];

@Component({
	selector: 'my-app',
	template: `
		<h2>My Bikes</h2>
		<ul class="bikes">
			<li *ngFor="let bike of bikes" (click)="onSelect(bike)" [class.selected]="bike === selectedBike">
				<span class="badge">{{bike.id}}</span> {{bike.brand}} {{bike.name}}
			</li>
		</ul>
		`,
		styles: [`
		.selected {
			background-color: #CFD8DC !important;
			color: white;
		}
		.bikes {
			margin: 0 0 2em 0;
			list-style-type: none;
			padding: 0;
			width: 15em;
		}
		.bikes li {
			cursor: pointer;
			position: relative;
			left: 0;
			background-color: #EEE;
			margin: .5em;
			padding: .3em 0;
			height: 1.6em;
			border-radius: 4px;
		}
		.bikes li.selected:hover {
			background-color: #BBD8DC !important;
			color: white;
		}
		.bikes li:hover {
			color: #607D8B;
			background-color: #DDD;
			left: .1em;
		}
		.bikes .text {
			position: relative;
			top: -3px;
		}
		.bikes .badge {
			display: inline-block;
			font-size: small;
			color: white;
			padding: 0.8em 0.7em 0 0.7em;
			background-color: #607D8B;
			line-height: 1em;
			position: relative;
			left: -1px;
			top: -4px;
			height: 1.8em;
			margin-right: .8em;
			border-radius: 4px 0 0 4px;
		}
	`]
})


export class AppComponent {
	title = 'Dream Bikes';
	bikes = BIKES;
	selectedBike : Bike;

	onSelect(bike: Bike): void {
		this.selectedBike = bike;
	}
}

