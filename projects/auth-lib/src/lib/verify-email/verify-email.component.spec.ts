import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailComponent } from './verify-email.component';
import {SignInComponent} from '../sign-in/sign-in.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthManagerService} from '../services/auth-manager.service';
import {config} from '../test.helpers.ts/test.config';
import {AuthenticationServices} from '../services/auth.service';
import {AuthSeviceMock} from '../test.helpers.ts/authentication.service.mock';
import {LogoComponent} from '../logo/logo.component';

describe('VerifyEmailComponent', () => {
  let component: VerifyEmailComponent;
  let fixture: ComponentFixture<VerifyEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyEmailComponent, LogoComponent ],
      imports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
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
    fixture = TestBed.createComponent(VerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
