import { Order } from './../../modals/order';
import { CartProduct } from './../../modals/cartProduct';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
// Class used to display cart and calculate Total
export class CartComponent implements OnInit {
  emptyCart = true;
  items: CartProduct[] = [];
  total: number;
  order: Order = {};
  subTotal: number[] = [];
  constructor() { }

  ngOnInit() {
    this.getCart();
  }

  // Function to get the cartProducts from sessionStorage item 'cart' and calculate total and subtotal
  getCart() {

  }

  // Function to update quantity when changed
  updateQuantity() {

  }

  // Function to calculate total and subtotal
  calculateTotal() {

  }

  // Function to remove the product of given index
  removeProduct(index) {

  }

  // Function to add the order to database and delete sessionStorage item 'cart'
  // get customerId from sessionStorage item 'user'
  checkOut() {

  }
}
