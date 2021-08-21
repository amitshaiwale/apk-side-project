import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  // public defaultValue = 1;
  selectedValue: number = 1;;

  price = 100.0;
  qty = 1;

  constructor(private _snackBar: MatSnackBar, private _router: Router) { }

  ngOnInit(): void {
  }

  changeInSelection(event: any) {
    console.log(event.value);
  }

  openSnackBar(action = "✖") {
    this._snackBar.open(`${this.selectedValue} kg selected 🍚`, action, { duration: 1500 });
    this._router.navigateByUrl('/checkout');
  }

}
