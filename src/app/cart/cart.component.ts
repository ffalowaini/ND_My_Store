import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private router: Router, private service:FetchDataService) { }
  cart: Product[] = []
  total: number = 0;
  form: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required]),
    address: new FormControl(null, [
      Validators.required]),
    card: new FormControl(null, [
      Validators.required]),
  });;

  ngOnInit(): void {
    this.cart = this.service.getCart();
    this.total = this.cart.reduce((a: number,b: Product) => {
      return a + (b.price * b.count);
    }, 0)
  }

  onSubmit(){
    this.service.setSelectedProduct(new Product());
    this.service.clearCart();
    this.service.setOrder(this.form.value.name, this.total)
    this.router.navigate(['/confirmation']);
  }

  onchange(){
    this.total = this.cart.reduce((a: number,b: Product) => {
      return a + (b.price * b.count);
    }, 0)
  }

}
