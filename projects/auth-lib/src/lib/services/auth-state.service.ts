import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {AuthStatesEnum} from '../models/auth-states.enum';
import {AuthManagerService} from './auth-manager.service';
import {Router} from '@angular/router';
import {CognitoUser} from 'amazon-cognito-identity-js';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  private _isLoggedIn: number = AuthStatesEnum.Loggedout;
  private _isAdmin: boolean;
  private _cognitoUser: any;
  private _userAttributes: any;

  _isLoggedInEvent: Subject<number> = new Subject<number>();
  _userAttributesEvent: Subject<number> = new Subject<number>();

  _messageInEvent: Subject<{ message: string, type: string}> = new Subject<{ message: string, type: string}>();

  constructor(public router: Router) {
  }

  public get isLoggedIn(): number {
    return this._isLoggedIn;
  }

   setIsLoggedIn(isLoggedIn: number) {
    this._isLoggedIn = isLoggedIn;
    this._isLoggedInEvent.next(this._isLoggedIn);
  }

  sendMessage(message: string, type: string) {
    this._messageInEvent.next({message, type});
  }

  public get cognitoUser(): CognitoUser {
    return this._cognitoUser;
  }

  public get userAttributes(): CognitoUser {
    return this._userAttributes;
  }

  public setUserAttributes(userAttributes) {
    this._userAttributes = userAttributes;
    this._userAttributesEvent.next(this._userAttributes);
  }

  public setCognitoUser(cognitoUser) {
    this._cognitoUser = cognitoUser;
  }

  public get isAdmin(): boolean {
    return this._isAdmin;
  }

  setIsAdmin(isAdmin: boolean) {
    this._isAdmin = isAdmin;
  }

  navigate(isLoggedIn) {
    switch (isLoggedIn) {
      case AuthStatesEnum.Loggedout:
        this.router.navigateByUrl('sign-in');
        break;
      case AuthStatesEnum.LoggedIn:
        this.router.navigateByUrl('home');
        break;
      case AuthStatesEnum.SetNewPassword:
        this.router.navigateByUrl('set-password');
        break;
      case AuthStatesEnum.ForcedPasswordReset:
        this.router.navigateByUrl('force-password-change');
        break;
      case AuthStatesEnum.ApplyForPasswordReset:
        this.router.navigateByUrl('forgot-password');
        break;
      case AuthStatesEnum.VerifyEmail:
        this.router.navigateByUrl('verify-email');
        break;
    }
  }
}
