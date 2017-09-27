import { Injectable } from '@angular/core';

import {bike} from ';/bike';
import {BIKES} from './mock-bikes';

@Injectable()
export class HeroService {
	getBikes(): Bike[] {
		return BIKES;
	}
}

