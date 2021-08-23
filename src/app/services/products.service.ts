import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Products } from '../pages/apk-products/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  remoteProducts = this.store.collection('product-details').valueChanges({idField: 'id'});

  products = [
    { id: 1, name: "ProdOne" },
  ]

  getAllProducts() {
    return this.products;
  }

  constructor(private store: AngularFirestore) { }

  // fetch list of products from firebase
  fetchRemoteProducts() {
    return this.remoteProducts;
  }
}
