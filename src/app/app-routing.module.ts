import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
    { path: '', component: ProductListComponent, pathMatch: 'full' },
    { path: 'product-list', component: ProductListComponent, pathMatch: 'full' },
    { path: 'cart', component: CartComponent, pathMatch: 'full' },
    { path: 'product-item', component: ProductItemDetailComponent, pathMatch: 'full' },
    { path: 'confirmation', component: ConfirmationComponent, pathMatch: 'full' },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }