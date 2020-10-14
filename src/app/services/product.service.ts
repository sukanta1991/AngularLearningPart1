import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../modals/product';
import { ErrorHandler } from '../error-handler';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
// Use 'API_URL' from environment.ts
export class ProductService {
  constructor(
    private httpClient: HttpClient,
    private errorHandler: ErrorHandler
  ) {}

  // Function to get all products available with JWT authentication token
  // and error handling using erro-handler.ts
  getAllProducts(): Observable<Product[]> {
    const token = 'Bearer ' + sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.httpClient
      .get<Product[]>(environment.API_URL + '/products', httpOptions)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.errorHandler.handleError) // then handle the error
      );
  }

  // Function to get all products of particular category with JWT authentication token
  // and error handling using erro-handler.ts
  getProductsByCategory(payload: string): Observable<Product[]> {
    const token = 'Bearer ' + sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.httpClient
      .get<Product[]>(
        environment.API_URL + '/products?category=' + payload,
        httpOptions
      )
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.errorHandler.handleError) // then handle the error
      );
  }
}
