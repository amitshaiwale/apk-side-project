import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  // public defaultValue = 1;
  
  price = 100.0;
  qty = 1;

  constructor() { }

  ngOnInit(): void {
  }

  incremenetQty() {
      this.price * this.qty
  }

  decrementQty() {

  }

}
