import { TestBed } from '@angular/core/testing';

import { AuthLibService } from './auth-lib.service';

describe('AuthLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthLibService = TestBed.get(AuthLibService);
    expect(service).toBeTruthy();
  });
});
