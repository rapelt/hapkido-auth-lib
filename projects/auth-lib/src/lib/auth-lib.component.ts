import {Component, OnInit} from '@angular/core';
import {ViewEncapsulation} from '@angular/cli/lib/config/schema';
import {AuthStateService} from './auth-state.service';
import {AuthenticationServices} from './auth.service';
import {AuthStatesEnum} from './auth-states.enum';


@Component({
  selector: 'auth-component-lib',
  templateUrl: './auth-lib.component.html',
  styleUrls: ['./auth-lib.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AuthLibComponent implements OnInit {
  isSignedIn = -1;

  authStateEnum = AuthStatesEnum;

  username: string;

  constructor(public authStateService: AuthStateService, public authService: AuthenticationServices) {
    console.log('Auth Lib is subscribing to isLoggedInEvent');
    this.authStateService._isLoggedInEvent.subscribe((isLoggedIn) => {
      this.isSignedIn = this.authStateService.isLoggedIn;
    });

    this.isSignedIn = this.authStateService.isLoggedIn;
  }

  ngOnInit() {

  }

  signIn($event: {username: string, password: string}) {
    this.authService.signIn($event.username, $event.password);
  }

  forgotPasswordBTN() {
    this.authService.applyForPasswordReset();
  }

  back() {
    console.log('Back');
    this.authService.checkIfSessionValid();
  }

  applyPasswordReset(event: {username: string}) {
    this.username = event.username;
    this.authService.sendForgotPasswordCode(event.username);
  }

  resetPassword(event: {verificationCode: string, password: string}) {
    if (this.username) {
      this.authService.forgotPassword(this.username, event.verificationCode, event.password);
    }
  }

  forcePasswordReset(event: {password: string}) {
    this.authService.passwordChallenge(event.password);
  }

  error(message) {
    this.authStateService.sendMessage(message, 'Error');
  }
}
