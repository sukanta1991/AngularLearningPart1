import { LoginRegisterService } from './../src/app/services/login-register.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AccountService } from '../src/app/services/account.service';

describe('AccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [AccountService]
  }));

  it('should be created', () => {
    const service: AccountService = TestBed.get(AccountService);
    expect(service).toBeTruthy();
  });

  it('should have getAccountDetails method', () => {
    const service: AccountService = TestBed.get(AccountService);
    expect(service.getAccountDetails).toBeTruthy();
  });

  it('should have updateAccountDetails method', () => {
    const service: AccountService = TestBed.get(AccountService);
    expect(service.updateAccountDetails).toBeTruthy();
  });


});
