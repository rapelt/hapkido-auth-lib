import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';
import {config} from '../test.helpers.ts/test.config';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoComponent ],
      providers: [
        {
          provide: 'config',
          useValue: config
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
