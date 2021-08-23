import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PriceCalculationsService } from 'src/app/services/price-calculations.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  pricePerKg: number = 100;
  calculatedPricePerKg: number = this.pricePerKg;
  selectedValue: number = 1;;

  price = 100.0;
  qty = 1;

  constructor(private _snackBar: MatSnackBar, private _router: Router, private _priceCalcService: PriceCalculationsService) { }

  ngOnInit(): void {
    // this._priceCalcService.priceBehaviorSubject.subscribe(console.log);
  }

  changeInSelection(event: any) {
    this.calculatedPricePerKg = event.value * this.pricePerKg;
    this._priceCalcService.priceBehaviorSubject.next(this.calculatedPricePerKg);
  }

  openSnackBar(action = "✖") {
    this._snackBar.open(`${this.selectedValue} kg selected 🍚`, action, { duration: 1500 });
    this._router.navigateByUrl('/checkout');
  }

}
