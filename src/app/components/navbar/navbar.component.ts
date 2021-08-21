import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showBag: Boolean = true;

  constructor(private _prod: ProductsService) { }

  ngOnInit(): void {
    this._prod.getAllProducts().length > 1 ? this.showBag = true : this.showBag = false;
  }

}
