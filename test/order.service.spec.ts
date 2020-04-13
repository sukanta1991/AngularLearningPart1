import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { OrderService } from '../src/app/services/order.service';
import { LoginRegisterService } from './../src/app/services/login-register.service';


describe('OrderService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LoginRegisterService, OrderService],
    })
  );

  it('should be created', () => {
    const service: OrderService = TestBed.get(OrderService);
    expect(service).toBeTruthy();
  });

  it('should have addOrders method', () => {
    const service: OrderService = TestBed.get(OrderService);
    expect(service.addOrders).toBeTruthy();
  });

  it('should have getOrdersByCustomer method', () => {
    const service: OrderService = TestBed.get(OrderService);
    expect(service.getOrdersByCustomer).toBeTruthy();
  });
  it('should get all orders of a customer', (done) => {
    const service: OrderService = TestBed.get(OrderService);
    const fakeLogin: LoginRegisterService = TestBed.get(LoginRegisterService);
    const payload = { email: 'bruno@email.com', password: 'bruno' };
    fakeLogin.login(payload).subscribe((data) => {
      sessionStorage.setItem('token', data.access_token);
    });
    service.getOrdersByCustomer('1').subscribe((data) => {
      expect(data[0].customerId).toEqual('1');
      done();
    });
  });

});
