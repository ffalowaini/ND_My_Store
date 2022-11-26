import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product:any;
  count: number = 1;
  @Output() addToCartEvent = new EventEmitter<Product>();

  constructor(private router: Router, private service:FetchDataService) { }

  ngOnInit(): void {
  }

  openProductPage() {
    this.service.setSelectedProduct(this.product)
    this.router.navigate(['/product-item']);
  }


  addToCart() {
    this.addToCartEvent.emit({...this.product, count: this.count});
  }

}