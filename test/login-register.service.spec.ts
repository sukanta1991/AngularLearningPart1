import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { LoginRegisterService } from '../src/app/services/login-register.service';

describe('LoginRegisterService', () => {
  let service: LoginRegisterService;

  beforeEach( async( () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LoginRegisterService],
    });
    service = TestBed.get(LoginRegisterService);
  }));

  it('should be created', async( () => {
    expect(service).toBeTruthy();
  }));

  it('should have login method', async( () => {
    expect(service.login).toBeTruthy();
  }));

  it('should have register method', async( () => {
    expect(service.register).toBeTruthy();
  }));

  it('login method should return access_token', (done) => {
    const payload = { email: 'bruno@email.com', password: 'bruno' };
    service.login(payload).subscribe((data) => {
      expect(data.access_token).toBeTruthy();
      done();
    });
  });
});
