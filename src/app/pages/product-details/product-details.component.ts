import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  // public defaultValue = 1;
  selectedValue: string = "";

  price = 100.0;
  qty = 1;

  constructor(private _snackBar: MatSnackBar, private _router: Router) { }

  ngOnInit(): void {
  }

  changeInSelection(event: any) {
    console.log(event.value);
  }

  openSnackBar(msg: string, action="✖") {
    this._snackBar.open(msg, action);
    this._router.navigateByUrl('/checkout');
  }

}
