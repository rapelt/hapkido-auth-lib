import {Inject, Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import {AuthStateService} from '../services/auth-state.service';
import {AuthStatesEnum} from '../models/auth-states.enum';
// import { MessagesService } from '../../messages/messages.service';

@Injectable({
  providedIn: 'root'
})

export class AuthSeviceMock {

  // tslint:disable-next-line:variable-name
  user_attri = [
    {Name: 'sub', Value: '4a4eb79c-5898-4de7-8540-153515c25f80'},
    {Name: 'email', Value: 'rebekahapelt@gmail.com'},
    {Name: 'email_verified', Value: 'false'}
  ];

  constructor(@Inject('config') private config, private authStateService: AuthStateService) {
    console.log('using Mock Cognito');
    const isLoggedIn = localStorage.getItem('login');
    this.refreshOrResetCreds(isLoggedIn);
  }

  signIn(username, password) {
    const promise =  new Promise((resolve, reject) => {
      try {
        if (password === AuthStatesEnum.LoggedIn + '') {
          this.successfulSignIn(username);
        }

        if (password === AuthStatesEnum.ForcedPasswordReset + '') {
          this.authStateService.setIsLoggedIn(AuthStatesEnum.ForcedPasswordReset);
          this.authStateService.navigate(AuthStatesEnum.ForcedPasswordReset);


        }

        if (password === 'e') {
          this.authStateService.sendMessage('Error', 'Error');

        }
        resolve();
      } catch (e) { reject(e); }
    });

    return from(promise);

  }

  checkIfSessionValid(): boolean {
    const isLI = localStorage.getItem('login');
    console.log('is logged in ', isLI);
    if (isLI === 'true') {
      this.authStateService.setIsLoggedIn(AuthStatesEnum.LoggedIn);
      console.log('Session valid');
      return true;
    } else {
      this.authStateService.setIsLoggedIn(AuthStatesEnum.Loggedout);
      console.log('Session invalid');
      return false;
    }
  }

  applyForPasswordReset() {
    this.authStateService.setIsLoggedIn(AuthStatesEnum.ApplyForPasswordReset);
    this.authStateService.navigate(AuthStatesEnum.ApplyForPasswordReset);

  }

  successfulSignIn(username = 'rebekah') {
    this.authStateService.setIsLoggedIn(AuthStatesEnum.LoggedIn);
    this.authStateService.navigate(AuthStatesEnum.LoggedIn);

    localStorage.setItem('login', 'true');
    this.getAttribute();
  }


  private authDetails(username, password) {
    // return new AuthenticationDetails({Username: username, Password: password});
    return null;

  }

  getAttribute() {
    // this.store.dispatch(new SetUserAttributes({attributes: this.user_attri, session: null}));
  }


  private refreshOrResetCreds(isLoggedIn) {
    if (isLoggedIn === 'true') {
      // this.successfulSignIn();
      this.authStateService.setIsLoggedIn(AuthStatesEnum.LoggedIn);
      localStorage.setItem('login', 'true');
      this.getAttribute();
    } else {
      this.authStateService.setIsLoggedIn(AuthStatesEnum.Loggedout);
      localStorage.setItem('login', 'false');
    }
  }

  isAdmin(session) {
    return true;
  }

  signout() {
    localStorage.setItem('login', 'false');
    this.authStateService.setIsLoggedIn(AuthStatesEnum.Loggedout);
    this.authStateService.navigate(AuthStatesEnum.Loggedout);


  }

  passwordChallenge(password) {
    this.successfulSignIn();
  }

  forgotPassword(username, verificationCode, newPassword) {
    if (verificationCode === '1') {
      this.authStateService.sendMessage('Invalid verification code', 'Error');
      return;
    }

    if (newPassword !== 'e') {
      localStorage.setItem('login', 'true');
      this.successfulSignIn(username);
      return;
    }

    if (newPassword === 'e') {
      this.authStateService.sendMessage('An error occurred', 'Error');
      return;
    }
  }

  sendForgotPasswordCode(username) {
    this.authStateService.setIsLoggedIn(AuthStatesEnum.SetNewPassword);
    this.authStateService.navigate(AuthStatesEnum.SetNewPassword);

  }

  sendEmailVerificationCode() {
  }

  verifyEmail(verificationCode) {

    this.user_attri = [
      {Name: 'sub', Value: '4a4eb79c-5898-4de7-8540-153515c25f80'},
      {Name: 'email', Value: 'rebekahapelt@gmail.com'},
      {Name: 'email_verified', Value: 'true'}

    ];
    this.getAttribute();
  }
}

