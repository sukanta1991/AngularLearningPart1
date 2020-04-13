import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/modals/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
// Class to display the products
export class ProductsComponent implements OnInit {
  items: Product[];

  constructor() {}

  ngOnInit() {
    this.routeAnalyser();
  }

  // Function to read the route and display data based on the route using ActivatedRoute
  // Searching logic has to be implemented here
  routeAnalyser() {

  }

  // Function to change quantity when change in the Ui
  changeQuantity(event, i) {

  }

  // Function to add the product to cart using a sessionStorage item 'cart'
  // Convert the given value from Product to cartProduct type
  add(item: Product) {

  }
}
