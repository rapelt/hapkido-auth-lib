import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ViewEncapsulation} from '@angular/cli/lib/config/schema';
import {AuthStateService} from './auth-state.service';
import {Config} from './auth-lib.models';
import {AuthenticationServices} from './auth.service';

enum AuthScreen {
  signIn,
  signout,
  resetPassword,
  verifyemail
}

@Component({
  selector: 'auth-component-lib',
  templateUrl: './auth-lib.component.html',
  styleUrls: ['./auth-lib.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AuthLibComponent implements OnInit {
  constructor(public authStateService: AuthStateService, public authService: AuthenticationServices) { }

  ngOnInit() {
  }

  signIn($event: {username: string, password: string}) {
    this.authService.signIn($event.username, $event.password);
  }

}
