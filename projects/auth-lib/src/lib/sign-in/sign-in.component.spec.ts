import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthManagerService} from '../services/auth-manager.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthLibModule} from '../auth-lib.module';
import {config} from '../test.helpers.ts/test.config';
import {AuthenticationServices} from '../services/auth.service';
import {AuthSeviceMock} from '../test.helpers.ts/authentication.service.mock';
import {LogoComponent} from '../logo/logo.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInComponent, LogoComponent ],
      imports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        AuthManagerService,
        {
          provide: 'config',
          useValue: config
        },
        { provide: AuthenticationServices, useClass: AuthSeviceMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
