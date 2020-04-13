import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// Use 'API_URL' from environment.ts
export class LoginRegisterService {
  constructor() {}

  // Function to send login data to the backend with error handling
  login(payload: object): Observable<any> {

    return null;
  }

  // Function to send register data to the backend with error handling
  register(payload: object): Observable<any> {

    return null;
  }
}
