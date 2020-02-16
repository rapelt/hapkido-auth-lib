import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcePasswordResetComponent } from './force-password-reset.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('ForcePasswordResetComponent', () => {
  let component: ForcePasswordResetComponent;
  let fixture: ComponentFixture<ForcePasswordResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForcePasswordResetComponent ],
      imports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule
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
