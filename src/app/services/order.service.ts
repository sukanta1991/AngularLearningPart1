import { Order } from './../modals/order';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler } from '../error-handler';
import { environment } from 'src/environments/environment';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
// Use 'API_URL' from environment.ts
export class OrderService {
  constructor(private httpClient: HttpClient,
    private errorHandler: ErrorHandler
    ) {}

  // Function to create a new Order with JWT authentication token
  // and error handling using erro-handler.ts
  addOrders(payload: Order): Observable<any> {
    const token = 'Bearer ' + sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.httpClient
      .post<any>(environment.API_URL + '/orders', payload, httpOptions)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.errorHandler.handleError) // then handle the error
      );
  }

  // Function to get all orders of a user using user id with JWT authentication token
  // and error handling using erro-handler.ts
  getOrdersByCustomer(payload: string): Observable<Order[]> {
    const token = 'Bearer ' + sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.httpClient
      .get<Order[]>(
        environment.API_URL + '/orders?customerId=' + payload,
        httpOptions
      )
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.errorHandler.handleError) // then handle the error
      );
  }
}
