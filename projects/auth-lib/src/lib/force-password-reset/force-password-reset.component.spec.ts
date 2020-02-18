import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcePasswordResetComponent } from './force-password-reset.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {config} from '../test.helpers.ts/test.config';
import {AuthenticationServices} from '../auth.service';
import {AuthSeviceMock} from '../authentication.service.mock';
import {AuthManagerService} from '../auth-manager.service';

describe('ForcePasswordResetComponent', () => {
  let component: ForcePasswordResetComponent;
  let fixture: ComponentFixture<ForcePasswordResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForcePasswordResetComponent ],
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
