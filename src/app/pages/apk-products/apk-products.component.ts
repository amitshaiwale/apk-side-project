import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from './products';

@Component({
  selector: 'app-apk-products',
  templateUrl: './apk-products.component.html',
  styleUrls: ['./apk-products.component.scss']
})
export class ApkProductsComponent implements OnInit {

  products: any = [];
  remoteProducts: any;

  constructor(private _prods: ProductsService) { }

  ngOnInit(): void {
    this.products = this._prods.getAllProducts();
    this.remoteProducts = this._prods.fetchRemoteProducts();
    console.log(this.remoteProducts);
    
  }

}
