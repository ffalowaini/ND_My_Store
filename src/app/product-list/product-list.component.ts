import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private service:FetchDataService, private cartService: CartService) { }

  data: Product[] = [];
  
  ngOnInit(): void {
    this.service.getData().subscribe(resp => {
      this.data = resp;
    })
  }


  addToCart(p: Product){
    this.cartService.addToCart(p)
    alert("ADDED SUCCSESFULLY!!")
  }


}
