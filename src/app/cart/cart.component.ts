import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private router: Router, private service:FetchDataService,  private cartService: CartService) { }
  cart: Product[] = [];
  total: number = 0;
  form: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required, Validators.minLength(5)]),
    address: new FormControl(null, [
      Validators.required]),
    card: new FormControl(null, [
      Validators.required, Validators.minLength(14),  Validators.pattern("^[0-9]*$"),      Validators.maxLength(14)]),
  });

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cart.reduce((a: number,b: Product) => {
      return a + (b.price * b.count);
    }, 0)
  }

  onSubmit(){
    this.service.setSelectedProduct(new Product());
    this.cartService.clearCart();
    this.service.setOrder(this.form.value.name, this.total)
    this.router.navigate(['/confirmation']);
  }

  onchange(p: Product){
    console.log(p)
    this.total = this.cart.reduce((a: number,b) => {
      const x =  b.price * b.count;
      return a + x;
    }, 0);
    if (p.count === 0){
      this.cartService.deleteFromCart(p.id);
      this.cart = this.cartService.getCart();
    }
  }

}
