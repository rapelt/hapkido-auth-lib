import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {AuthStatesEnum} from './auth-states.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  private _isLoggedIn: number = AuthStatesEnum.Loggedout;
  private _isAdmin: boolean;

  _isLoggedInEvent: Subject<number> = new Subject<number>();
  _messageInEvent: Subject<{ message: string, type: string}> = new Subject<{ message: string, type: string}>();


  constructor() {
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

  public get isAdmin(): boolean {
    return this._isAdmin;
  }

  setIsAdmin(isAdmin: boolean) {
    this._isAdmin = isAdmin;
  }
}
