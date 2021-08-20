import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApkProductsComponent } from './pages/apk-products/apk-products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: ApkProductsComponent },
  { path: 'products', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
