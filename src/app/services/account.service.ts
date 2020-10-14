import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Customer } from '../modals/customer';
import { ErrorHandler } from '../error-handler';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
 })
 // Use 'API_URL' from environment.ts
export class AccountService {
  constructor(
    private httpClient: HttpClient,
    private errorHandler: ErrorHandler
  ) {}

  // Function to get User's account details using email with JWT authentication token
  // and error handling using erro-handler.ts
  getAccountDetails(payload: string): Observable<Customer> {
    const token = 'Bearer ' + sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.httpClient
      .get(environment.API_URL + '/customers?email=' + payload, httpOptions)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.errorHandler.handleError) // then handle the error
      );
  }

  // Function to update or create new User's account details with JWT authentication token
  // and error handling using erro-handler.ts
  updateAccountDetails(payload: Customer): Observable<Customer> {
    const token = 'Bearer ' + sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.httpClient
      .put(environment.API_URL + '/customers/' + payload.id, payload, httpOptions)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.errorHandler.handleError) // then handle the error
      );
  }

  // Function to update or create new User's account details with JWT authentication token
  // and error handling using erro-handler.ts
  addAccountDetails(payload: Customer): Observable<any> {
    const token = 'Bearer ' + sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.httpClient
      .post(environment.API_URL + '/customers', payload, httpOptions)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.errorHandler.handleError) // then handle the error
      );
  }
}
