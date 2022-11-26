import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(private router: Router, private service:FetchDataService) { }
  name: string = '';
  price: number = 0;
  
  ngOnInit(): void {
    this.name = this.service.getOrder().name;
    this.price = this.service.getOrder().price;
  }

  back() {
    this.router.navigate(['/product-list']);
  }

}
