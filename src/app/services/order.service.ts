import { Order } from './../modals/order';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
// Use 'API_URL' from environment.ts
export class OrderService {
  constructor() {}

  // Function to create a new Order with JWT authentication token
  // and error handling using erro-handler.ts
  addOrders(payload: Order): Observable<any> {

    return null;
  }

  // Function to get all orders of a user using user id with JWT authentication token
  // and error handling using erro-handler.ts
  getOrdersByCustomer(payload: string): Observable<Order[]> {

    return null;
  }
}
