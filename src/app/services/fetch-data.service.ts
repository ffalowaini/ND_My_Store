import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  cartData: Product[] = []
  selectedProduct: Product = new Product();
  order: {name:string, price:number} = {name:'', price:0};

  constructor(private http: HttpClient) { }

  getData() {
   return  this.http.get<Product[]>('./assets/data.json');
  }

  addToCart(product: Product){
    this.cartData.push(product);
  }

  clearCart(){
    this.cartData = [];
  }

  setSelectedProduct(product: Product){
    this.selectedProduct = product;
  }

  getSelectedProduct(): Product{
    return this.selectedProduct;
  }

  getCart(): Product[]{
    return this.cartData;
  }

  setOrder(name:string, price:number){
    this.order = {name, price}
  }

  getOrder(){
    return this.order;
  }
}
