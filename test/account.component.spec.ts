import { Customer } from './../src/app/modals/customer';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './../src/app/pages/header/header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from '../src/app/pages/account/account.component';
import { FooterComponent } from 'src/app/pages/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  const user: Customer = {
    id: '1',
    firstName: 'bruno',
    lastName: 'mars',
    email: 'bruno@email.com',
    password: 'bruno',
};


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountComponent, HeaderComponent, FooterComponent ],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
    sessionStorage.setItem('user', JSON.stringify(user));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should have getOrders method', () => {
    expect(component.getOrders).toBeTruthy();
  });

  it('should have getUserDetails method', () => {
    expect(component.getUserDetails).toBeTruthy();
  });

  it('should have update method', () => {
    expect(component.update).toBeTruthy();
  });

});
