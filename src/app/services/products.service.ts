import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    { id: 1, name: "ProdOne" },
  ]

  getAllProducts() {
    return this.products;
  }

  constructor() { }
}
