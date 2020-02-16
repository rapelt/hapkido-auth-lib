import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyPasswordResetComponent } from './apply-password-reset.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('ApplyPasswordResetComponent', () => {
  let component: ApplyPasswordResetComponent;
  let fixture: ComponentFixture<ApplyPasswordResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyPasswordResetComponent ],
      imports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule
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
