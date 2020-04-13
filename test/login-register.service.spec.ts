import { TestBed } from '@angular/core/testing';

import { LoginRegisterService } from '../src/app/services/login-register.service';
import { HttpClientModule } from '@angular/common/http';

describe('LoginRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [LoginRegisterService]
  }));


  it('should be created', () => {
    const service: LoginRegisterService = TestBed.get(LoginRegisterService);
    expect(service).toBeTruthy();
  });

  it('should have login method', () => {
    const service: LoginRegisterService = TestBed.get(LoginRegisterService);
    expect(service.login).toBeTruthy();
  });

  it('should have register method', () => {
    const service: LoginRegisterService = TestBed.get(LoginRegisterService);
    expect(service.register).toBeTruthy();
  });

  it('login method should return access_token', (done) => {
    const payload = { email: 'bruno@email.com',
            password: 'bruno' };
    const service: LoginRegisterService = TestBed.get(LoginRegisterService);
    service.login(payload).subscribe( data => {
      expect(data.access_token).toBeTruthy();
      done();
    });
  });

});
