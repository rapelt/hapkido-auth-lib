import { Injectable } from '@angular/core';
import {AuthStateService} from './auth-state.service';
import {AuthenticationServices} from './auth.service';
import {Router} from '@angular/router';
import {AuthStatesEnum} from './auth-states.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthManagerService {

  username: string;

  constructor(public authStateService: AuthStateService, public authService: AuthenticationServices) {
  }

  signIn(username: string, password: string) {
    this.authService.signIn(username, password);
  }

  forgotPasswordBTN() {
    this.authService.applyForPasswordReset();
  }

  back() {
    console.log('Back');
    this.authService.checkIfSessionValid();
  }

  applyPasswordReset(username: string) {
    this.username = username;
    this.authService.sendForgotPasswordCode(username);
  }

  resetPassword(verificationCode: string, password: string) {
    if (this.username) {
      this.authService.forgotPassword(this.username, verificationCode, password);
    } else {
      this.error('Please go back and try again');
    }
    this.username = null;
  }

  forcePasswordReset(password: string) {
    this.authService.passwordChallenge(password);
  }

  error(message) {
    this.authStateService.sendMessage(message, 'Error');
  }


}
