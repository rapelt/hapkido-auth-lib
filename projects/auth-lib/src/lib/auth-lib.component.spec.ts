import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLibComponent } from './auth-lib.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignInComponent} from './sign-in/sign-in.component';
import {AuthStateService} from './services/auth-state.service';
import {AuthenticationServices} from './services/auth.service';
import {AuthLibModule} from './auth-lib.module';
import {AuthSeviceMock} from './test.helpers.ts/authentication.service.mock';
import {RouterTestingModule} from '@angular/router/testing';
import {config} from './test.helpers.ts/test.config';

describe('AuthLibComponent', () => {
  let component: AuthLibComponent;
  let fixture: ComponentFixture<AuthLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      providers: [
        AuthStateService,
        { provide: AuthenticationServices, useClass: AuthSeviceMock },
      ],
      imports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        AuthLibModule.forRoot(config),
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
