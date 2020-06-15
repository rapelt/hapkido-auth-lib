import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcePasswordResetComponent } from './force-password-reset.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {config} from '../test.helpers.ts/test.config';
import {AuthenticationServices} from '../services/auth.service';
import {AuthSeviceMock} from '../test.helpers.ts/authentication.service.mock';
import {AuthManagerService} from '../services/auth-manager.service';
import {LogoComponent} from '../logo/logo.component';

describe('ForcePasswordResetComponent', () => {
  let component: ForcePasswordResetComponent;
  let fixture: ComponentFixture<ForcePasswordResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForcePasswordResetComponent, LogoComponent ],
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
        AuthManagerService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcePasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
