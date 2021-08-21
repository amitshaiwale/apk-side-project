import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    { id: 1, name: "ProdOne" },
    // { id: 2, name: "ProdTwo" },
    // { id: 3, name: "ProodThree" },
  ]

  getAllProducts() {
    return this.products;
  }

  constructor() { }
}
