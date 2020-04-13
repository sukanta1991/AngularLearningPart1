import { Customer } from 'src/app/modals/customer';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
// Class to display header
export class HeaderComponent implements OnInit {
  @ViewChild('', { static: false }) openModal: ElementRef;
  isLoggedIn = false;
  user: Customer = {};
  hide;

  loginForm: FormGroup;
  registerForm: FormGroup;
  searchForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.createForm();
    this.loggedInCheck();
  }

  // Function to check Login is successful and change tabs in the header using sessionStorage item 'token'
  loggedInCheck() {

  }

  // Function to create formGroup for Login, Register and Search which are loginForm, registerForm, searchForm respectively.
  // with appropriate formControl for all formGroup and validators have to be included for loginForm and registerForm.
  createForm() {

  }

  // Function to navigate to products route 'products/search/' appended with search input
  search(post) {

  }

  //  Function to get user's credential and send to backend for authentication token
  //  store the authentication token in a sessionStorage item 'token' and
  //  if user account is crated get user details using accountService or
  //  else create a user account for registered user using updateAccountDetails in accountService
  //  and store in a sessionStorage item 'user' and navigate to 'products/all'
  logIn(post) {

  }

  // Function to register an user,intialize user variable and open the login modal
  register(post) {

  }

  // Function to clear all sessionStorage  items and reload to landing page
  signOut() {

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    $(document.body).removeClass('modal-open');
    $('.modal-backdrop').remove();
  }
}
