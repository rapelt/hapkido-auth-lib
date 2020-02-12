import {Injectable} from '@angular/core';

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

  constructor() {
  }

  signIn(username, password) {
  }

  successfulSignIn(username = 'rebekah') {

  }


  private authDetails (username, password) {

  }

  getAttribute() {
  }


  private refreshOrResetCreds (isLoggedIn) {

  }

  isAdmin(session) {
  }

  signout () {
  }

  passwordChallenge(username, password) {
  }

  forgotPassword(username, verificationCode, newPassword) {

  }

  sendForgotPasswordCode(username) {

  }

  sendEmailVerificationCode() {
  }

  verifyEmail(verificationCode) {

  }
}
