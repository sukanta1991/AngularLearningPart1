import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../modals/product';

@Injectable({
  providedIn: 'root',
})
// Use 'API_URL' from environment.ts
export class ProductService {
  constructor() {}

  // Function to get all products available with JWT authentication token and error handling
  getAllProducts(): Observable<Product[]> {
    return null;
  }

  // Function to get all products of particular category with JWT authentication token and error handling
  getProductsByCategory(payload: string): Observable<Product[]> {
    return null;
  }
}
