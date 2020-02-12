import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLibComponent } from './auth-lib.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignInComponent} from './sign-in/sign-in.component';
import {AuthStateService} from './auth-state.service';
import {AuthenticationServices} from './auth.service';
import {AuthLibModule} from './auth-lib.module';
import {AuthSeviceMock} from './authentication.service.mock';

const config = {
  environmentName: 'Test Environment',
  ionicEnvName: 'test',
  classAPIEndpoint: 'http://localhost:8080/class/',
  studentAPIEndpoint: 'http://localhost:8080/student/',
  familyAPIEndpoint: 'http://localhost:8080/family/',
  getClassTime: 15000,
  aws_cognito_region: 'nnn',
  aws_user_pools_id: 'nnn',
  aws_user_pools_web_client_id: 'nnn',
  feature_toggle: {
    cognito_login: true,
    download_graphs: true
  }
};

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
        AuthLibModule.forRoot(config)
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
