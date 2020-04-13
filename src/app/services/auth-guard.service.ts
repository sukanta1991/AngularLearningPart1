import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

// class to implement route guard for particular routes
export class AuthGuardService implements CanActivate {
  constructor() {}

  // Implement 'canActivate' method for Route Guard
  canActivate(): boolean {

    return null;
  }
}
