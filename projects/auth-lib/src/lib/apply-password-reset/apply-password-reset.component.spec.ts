import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyPasswordResetComponent } from './apply-password-reset.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthLibModule} from '../auth-lib.module';
import {config} from '../test.helpers.ts/test.config';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthenticationServices} from '../services/auth.service';
import {AuthSeviceMock} from '../test.helpers.ts/authentication.service.mock';
import {LogoComponent} from '../logo/logo.component';

describe('ApplyPasswordResetComponent', () => {
  let component: ApplyPasswordResetComponent;
  let fixture: ComponentFixture<ApplyPasswordResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyPasswordResetComponent, LogoComponent ],
      imports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
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
    fixture = TestBed.createComponent(ApplyPasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
