import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/modals/customer';

import { Order } from 'src/app/modals/order';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
// Class to display account Details
export class AccountComponent implements OnInit {

  user: Customer = {};
  orders: Order[];

  constructor() { }

  ngOnInit() {
    this.getUserDetails();
    this.getOrders();
  }

  // Function to get details of user from sessionStorage item 'user'
  getUserDetails() {

  }

  // Function to update changes made by user to backend
  update() {

  }

  // Function to get all orders of the user from backend
  getOrders() {

  }
  
}
