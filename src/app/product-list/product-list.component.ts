import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private service:FetchDataService) { }

  data: Product[] = [];
  
  ngOnInit(): void {
    this.service.getData().subscribe(resp => {
      this.data = resp;
    })
  }

}
