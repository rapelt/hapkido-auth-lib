import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetNewPasswordComponent } from './set-new-password.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthManagerService} from '../auth-manager.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthStateService} from '../auth-state.service';
import {AuthenticationServices} from '../auth.service';
import {AuthSeviceMock} from '../authentication.service.mock';
import {config} from '../test.helpers.ts/test.config';

describe('SetNewPasswordComponent', () => {
  let component: SetNewPasswordComponent;
  let fixture: ComponentFixture<SetNewPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetNewPasswordComponent ],
      imports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        AuthManagerService,
        AuthStateService,
        { provide: AuthenticationServices, useClass: AuthSeviceMock },
        {
          provide: 'config',
          useValue: config
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
