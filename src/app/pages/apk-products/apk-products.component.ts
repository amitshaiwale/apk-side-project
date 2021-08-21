import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-apk-products',
  templateUrl: './apk-products.component.html',
  styleUrls: ['./apk-products.component.scss']
})
export class ApkProductsComponent implements OnInit {

  products: any = [];

  constructor(private _prods: ProductsService) { }

  ngOnInit(): void {
    this.products = this._prods.getAllProducts();
  }

}
