import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product:any;
  count: number = 1;

  constructor(private router: Router, private service:FetchDataService) { }

  ngOnInit(): void {
  }

  openProductPage() {
    this.service.setSelectedProduct(this.product)
    this.router.navigate(['/product-item']);
  }


  addToCart() {
    this.service.addToCart({...this.product, count: this.count})
    alert("ADDED SUCCSESFULLY!!")
  }

}