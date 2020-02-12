import { TestBed } from '@angular/core/testing';

import { AuthStateService } from './auth-state.service';

describe('AuthLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthStateService = TestBed.get(AuthStateService);
    expect(service).toBeTruthy();
  });
});
