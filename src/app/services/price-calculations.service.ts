import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceCalculationsService {

  priceBehaviorSubject = new BehaviorSubject(100);

  constructor() { }
}
