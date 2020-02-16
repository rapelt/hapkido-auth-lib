import {AuthStateService} from './auth-state.service';

(window as any).global = window;

import {Inject, Injectable} from '@angular/core';
import { Router } from '@angular/router';
// import { AppState } from '@capacitor/core';
// import { Store } from '@ngrx/store';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
  CognitoUserSession,
  ICognitoUserPoolData
} from 'amazon-cognito-identity-js';
import { from } from 'rxjs';

// import * as jwt from 'jsonwebtoken';
import * as jwt from '@auth0/angular-jwt';
import {AuthStatesEnum} from './auth-states.enum';
import {JwtHelperService} from '@auth0/angular-jwt';

// import { MessagesService } from '../../messages/messages.service';
// import { ResetPasswordRequired, SetUserAttributes, SignInSuccess } from './authentication.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServices {
  private poolData: ICognitoUserPoolData;
  private userPool: CognitoUserPool;
  private cognitoUser: CognitoUser;
  private session: CognitoUserSession;
  private userAttributes;

  constructor(@Inject('config') private config, private authStateService: AuthStateService) {
    console.log('using real Cognito');

    if (this.config.feature_toggle.cognito_login) {
      this.poolData = {
        UserPoolId: this.config.aws_user_pools_id,
        ClientId: this.config.aws_user_pools_web_client_id
      };
      this.userPool = new CognitoUserPool(this.poolData);
      this.refreshOrResetCreds();
    }
  }

  checkIfSessionValid(): boolean {
    if (this.session && this.session.isValid()) {
      console.log('Session Valid');
      this.authStateService.setIsLoggedIn(AuthStatesEnum.LoggedIn);
      return true;
    } else {
      this.authStateService.setIsLoggedIn(AuthStatesEnum.Loggedout);
      console.log('Session invalid');
      return false;
    }
  }

  signIn(username, password) {
    this.cognitoUser = this.getNewCognitoUser(username);

    const promise =  new Promise((resolve, reject) => {
      try {
        this.cognitoUser.authenticateUser(this.authDetails(username, password), this.awsCallBackFunctions());
      } catch (e) { reject(e); }
    });

    return from(promise);
  }

  private getNewCognitoUser(username): CognitoUser {
    return new CognitoUser({ Username: username, Pool: this.userPool });
  }

  awsCallBackFunctions() {
    return {
      onSuccess: this.successfulSignIn.bind(this),
      newPasswordRequired: this.newPasswordIsRequired.bind(this),
      mfaRequired: null,
      onFailure: (error) => {
        this.authStateService._messageInEvent.next({ message: error.message, type: 'error'});
        // this.messagesService.updateError.next(error.message);
        console.log(error);
      },
    };
  }

  successfulSignIn(session) {
    this.session = session;
    console.log(`Signed in user${this.cognitoUser.getUsername()}. Session valid?: `
      , session.isValid(), ' Admin?:' +  this.isAdmin(session));
    if (session.isValid()) {
      this.authStateService.setIsLoggedIn(AuthStatesEnum.LoggedIn);
    }
    this.authStateService.setIsAdmin(this.isAdmin(session));
  }

  newPasswordIsRequired(userAttributes, requiredAttributes) {
    this.userAttributes = userAttributes;
    this.authStateService.setIsLoggedIn(AuthStatesEnum.ForcedPasswordReset);
    console.log('new Password required');
  }

  private authDetails(username, password): AuthenticationDetails {
    return new AuthenticationDetails({Username: username, Password: password});
  }

  getAttribute() {
    if (this.session && this.session.isValid()) {
      this.cognitoUser.getUserAttributes((err, results) => {});
    }
  }


  private refreshOrResetCreds() {
    this.cognitoUser = this.userPool.getCurrentUser();

    if (this.cognitoUser !== null) {
      this.refreshSession();
    } else {
      this.resetCreds();
    }
  }

  private refreshSession(): Promise<CognitoUserSession> {
    const self = this;
    return new Promise ((resolve, reject) => {
      self.cognitoUser.getSession((err, session) => {
        if (err) {
          console.log('Error refreshing user session', err);
          this.authStateService._messageInEvent.next({ message: err.message, type: 'error'});
          return reject(err);
        }

        console.log(
          `${new Date()} - Refreshed session for ${self.cognitoUser.getUsername()}. Valid?: `, session.isValid(),
          ' Admin?:' +  this.isAdmin(session));


        this.getAttribute();

        if (session.isValid() && this.isAdmin(session)) {
          this.session = session;
          this.authStateService.setIsAdmin(this.isAdmin(session));
        }

        this.authStateService.setIsLoggedIn(AuthStatesEnum.LoggedIn);

        resolve(session);
      });
    });
  }

  private resetCreds(clearCache: boolean = false) {
    console.log('Resetting credentials for unauth access');
    this.cognitoUser = null;
  }

  isAdmin(session) {
    const helper = new JwtHelperService();

    if (session) {
      const accesstoken = session.getAccessToken();
      const jwtToken = helper.decodeToken(accesstoken.getJwtToken());
      if (jwtToken['cognito:groups']) {
        return !!jwtToken['cognito:groups'].find((option) => option === 'admin');
      } else {
        return false;
      }
    }
    return false;
  }

  signout() {
    if (this.cognitoUser) {
      this.cognitoUser.signOut();
      this.resetCreds(true);
      this.session = null;
      this.authStateService.setIsLoggedIn(AuthStatesEnum.Loggedout);
    } else {
      this.authStateService.setIsLoggedIn(AuthStatesEnum.Loggedout);
    }
  }

  passwordChallenge(username, password) {
    return new Promise((resolve, reject) => {
      try {
        this.cognitoUser.completeNewPasswordChallenge(password, this.userAttributes, this.awsCallBackFunctions());
      } catch (e) { reject(e); }
    });
  }

  applyForPasswordReset() {
    this.authStateService.setIsLoggedIn(AuthStatesEnum.ApplyForPasswordReset);
  }

  forgotPassword(username, verificationCode, newPassword) {
    console.log(username, verificationCode, newPassword);
    this.cognitoUser = this.getNewCognitoUser(username);
    this.cognitoUser.confirmPassword(verificationCode, newPassword, {
      onSuccess: () => {
        console.log('successfully changed password');
        this.authStateService.setIsLoggedIn(AuthStatesEnum.Loggedout);
      },
      onFailure:  (error) => {
        this.authStateService._messageInEvent.next({ message: error.message, type: 'error'});

        console.log(error);
      }
    });
  }

  sendForgotPasswordCode(username) {
    console.log('send password code');
    this.cognitoUser = this.getNewCognitoUser(username);
    this.cognitoUser.forgotPassword({
      onSuccess: (success) => {
        console.log('successfully send password code');
        this.authStateService.setIsLoggedIn(AuthStatesEnum.SetNewPassword);
      },
      onFailure:  (error) => {
        console.log(error);
        this.authStateService._messageInEvent.next({ message: error.message, type: 'error'});
      },
      inputVerificationCode: () => {
        console.log('successfully send password code');
        this.authStateService.setIsLoggedIn(AuthStatesEnum.SetNewPassword);      }
    });
  }

  sendEmailVerificationCode() {
    this.cognitoUser.getAttributeVerificationCode('email', {
      onSuccess: () => {
        console.log('successfully send verification code');
      },
      onFailure: (err) => {
        this.authStateService._messageInEvent.next({ message: err.message, type: 'error'});
        console.log(err);
      },
      inputVerificationCode: () => {
        console.log('blarg');
      }
    });
  }

  verifyEmail(verificationCode) {
    this.cognitoUser.verifyAttribute('email', verificationCode, {
      onSuccess: () => {
        this.getAttribute();
      },
      onFailure: (err) => {
        this.authStateService._messageInEvent.next({ message: err.message, type: 'error'});
        console.log(err);
      }
    });
  }
}
