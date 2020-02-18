import {Component, OnInit} from '@angular/core';
import {ViewEncapsulation} from '@angular/cli/lib/config/schema';

@Component({
  selector: 'auth-component-lib',
  templateUrl: './auth-lib.component.html',
  styleUrls: ['./auth-lib.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AuthLibComponent {

  constructor() {
  }

}
