import { TestBed } from '@angular/core/testing';

import { AuthManagerService } from './auth-manager.service';
import {SetNewPasswordComponent} from './set-new-password/set-new-password.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthStateService} from './auth-state.service';
import {AuthenticationServices} from './auth.service';
import {AuthSeviceMock} from './authentication.service.mock';
import {AuthLibModule} from './auth-lib.module';
import {config} from './test.helpers.ts/test.config';

describe('AuthManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        RouterTestingModule.withRoutes([]),
        AuthLibModule.forRoot(config),
      ],
      providers: [
        AuthStateService,
        { provide: AuthenticationServices, useClass: AuthSeviceMock },
      ]
    })
      .compileComponents();
  });



  it('should be created', () => {
    const service: AuthManagerService = TestBed.get(AuthManagerService);
    expect(service).toBeTruthy();
  });
});
