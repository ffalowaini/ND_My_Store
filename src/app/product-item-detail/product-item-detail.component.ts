import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss']
})
export class ProductItemDetailComponent implements OnInit {

  constructor(private router: Router, private service:FetchDataService, private cartService: CartService) { }
  count: number = 1;
  product: Product = new Product();

  ngOnInit(): void {
    this.product =  this.service.getSelectedProduct();
  }

  addToCart(){
    this.cartService.addToCart({...this.product, count: this.count})
    alert("ADDED SUCCSESFULLY!!")
  }

  back(){
    this.router.navigate(['/product-list']);

  }
}
