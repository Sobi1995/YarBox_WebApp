import { TestBed } from '@angular/core/testing';

import { LoginProfileGuardService } from './login-profile-guard.service';

describe('LoginProfileGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginProfileGuardService = TestBed.get(LoginProfileGuardService);
    expect(service).toBeTruthy();
  });
});
