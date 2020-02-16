import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOutComponent } from './sign-out.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthStateService} from '../auth-state.service';
import {AuthSeviceMock} from '../authentication.service.mock';
import {AuthenticationServices} from '../auth.service';
import {config} from '../../../../../src/environments/environment.test';

describe('SignOutComponent', () => {
  let component: SignOutComponent;
  let fixture: ComponentFixture<SignOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignOutComponent ],
      imports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        AuthStateService,
        { provide: AuthenticationServices, useClass: AuthSeviceMock },
        {
          provide: 'config', // you can also use InjectionToken
          useValue: config
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
