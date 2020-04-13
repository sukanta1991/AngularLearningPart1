import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer } from '../modals/customer';


@Injectable({
  providedIn: 'root',
 })
 // Use 'API_URL' from environment.ts
export class AccountService {
  constructor() {}

  // Function to get User's account details using email with JWT authentication token and error handling
  getAccountDetails(payload: string): Observable<Customer> {

    return null;
  }

  // Function to update or create new User's account details with JWT authentication token and error handling
  updateAccountDetails(payload: Customer): Observable<any> {

    return null;
  }
}
