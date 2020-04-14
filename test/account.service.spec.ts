import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';

import { AccountService } from '../src/app/services/account.service';

describe('AccountService', () => {
  let service: AccountService;

  beforeEach( async( () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AccountService],
    });
    service = TestBed.get(AccountService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getAccountDetails method', () => {
    expect(service.getAccountDetails).toBeTruthy();
  });

  it('should have updateAccountDetails method', () => {
    expect(service.updateAccountDetails).toBeTruthy();
  });
});
