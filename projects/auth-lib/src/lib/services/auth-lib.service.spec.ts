import { TestBed } from '@angular/core/testing';

import { AuthStateService } from './auth-state.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthenticationServices} from './auth.service';
import {AuthSeviceMock} from '../test.helpers.ts/authentication.service.mock';

describe('AuthLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ ],
    imports: [
      RouterTestingModule.withRoutes([])
    ],
    providers: [
      AuthStateService,
      { provide: AuthenticationServices, useClass: AuthSeviceMock },
    ]
  }));

  it('should be created', () => {
    const service: AuthStateService = TestBed.get(AuthStateService);
    expect(service).toBeTruthy();
  });
});
