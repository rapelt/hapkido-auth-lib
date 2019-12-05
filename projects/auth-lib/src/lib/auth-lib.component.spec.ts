import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLibComponent } from './auth-lib.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignInComponent} from './sign-in/sign-in.component';

describe('AuthLibComponent', () => {
  let component: AuthLibComponent;
  let fixture: ComponentFixture<AuthLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLibComponent, SignInComponent ],
      imports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule
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
