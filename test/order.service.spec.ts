import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';

import { OrderService } from '../src/app/services/order.service';
import { LoginRegisterService } from './../src/app/services/login-register.service';


describe('OrderService', () => {
  let service: OrderService;
  let fakeLogin: LoginRegisterService;
  const payload = { email: 'bruno@email.com', password: 'bruno' };

  beforeEach( async( () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LoginRegisterService, OrderService],
    });
    fakeLogin = TestBed.get(LoginRegisterService);
    service = TestBed.get(OrderService);
    fakeLogin.login(payload).subscribe((data) => {
      sessionStorage.setItem('token', data.access_token);
    });
  }));

  afterEach( async( () => sessionStorage.clear()));

  it('should be created', async( () => {
    expect(service).toBeTruthy();
  }));

  it('should have addOrders method', async( () => {
    expect(service.addOrders).toBeTruthy();
  }));

  it('should have getOrdersByCustomer method', async( () => {
    expect(service.getOrdersByCustomer).toBeTruthy();
  }));

  it('should get all orders of a customer', (done) => {
    expect(sessionStorage.getItem('token')).toBeTruthy();
    service.getOrdersByCustomer('1').subscribe((data) => {
      expect(data[0].customerId).toEqual('1');
      done();
    });
  });
});
