import { HttpClientModule } from '@angular/common/http';
import { TestBed, tick, fakeAsync } from '@angular/core/testing';

import { ProductService } from '../src/app/services/product.service';
import { LoginRegisterService } from 'src/app/services/login-register.service';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ProductService, LoginRegisterService],
    });
  });

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });

  it('should have getAllProducts method', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service.getAllProducts).toBeTruthy();
  });

  it('should have getProductByCategory method', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service.getProductsByCategory).toBeTruthy();
  });

  it('should get 9 items of category fruits', (done) => {
    const service: ProductService = TestBed.get(ProductService);
    const fakeLogin: LoginRegisterService = TestBed.get(LoginRegisterService);
    const payload = { email: 'bruno@email.com', password: 'bruno' };
    fakeLogin.login(payload).subscribe((data) => {
      sessionStorage.setItem('token', data.access_token);
    });
    service.getProductsByCategory('fruit').subscribe((data) => {
      expect(data.length).toBe(9);
      expect(data[0].category).toEqual('fruit');
      done();
    });
  });

  it('should get all 34 items', (done) => {
    const service: ProductService = TestBed.get(ProductService);
    const fakeLogin: LoginRegisterService = TestBed.get(LoginRegisterService);
    const payload = { email: 'bruno@email.com', password: 'bruno' };
    fakeLogin.login(payload).subscribe((data) => {
      sessionStorage.setItem('token', data.access_token);
    });
    service.getAllProducts().subscribe((data) => {
      expect(data.length).toBe(34);
      done();
    });
  });
});
