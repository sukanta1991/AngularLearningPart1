import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// Use 'API_URL' from environment.ts
export class LoginRegisterService {
  constructor() {}

  // Function to send login data to the backend
  // and error handling using erro-handler.ts
  login(payload: object): Observable<any> {

    return null;
  }

  // Function to send register data to the backend
  // and error handling using erro-handler.ts
  register(payload: object): Observable<any> {

    return null;
  }
}
