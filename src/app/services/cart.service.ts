import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cartData: Product[] = []

  getCart(): Product[]{
    return this.cartData;
  }

  addToCart(product: Product){
    const productCart = this.cartData.find(i => product.id === i.id);
    if (productCart != undefined){
      this.cartData.forEach(item => {
        if (item.id === productCart.id){
          item.count += product.count as number;
        }
      })
    } else {
      this.cartData.push(product)
    }
  }

  clearCart(){
    this.cartData = [];
  }

  deleteFromCart(id: string){
    this.cartData = this.cartData.filter(item => item.id != id)
  }
}
