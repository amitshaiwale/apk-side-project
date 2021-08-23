import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apk-card',
  templateUrl: './apk-card.component.html',
  styleUrls: ['./apk-card.component.scss']
})
export class ApkCardComponent implements OnInit {

  @Input() productName = "Product Name";
  @Input() productDesc = "New and existing Google Fi subscribers can get $400 off the new Galaxy Z Flip 3";
  @Input() productPrice = 100.0;
  @Input() availability: boolean = true
  qty = 1;

  constructor() { }

  ngOnInit(): void {
  }

  incrementQty() {
    this.qty++;
    this.productPrice = this.qty * this.productPrice;
  }

  decrementQty() {
    if (this.qty > 1) {
      this.qty--;
      this.productPrice = this.qty * this.productPrice;
    }
  }

}
