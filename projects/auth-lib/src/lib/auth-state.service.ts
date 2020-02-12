import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  private _isLoggedIn: boolean;
  private _isAdmin: boolean;

  _isLoggedInEvent: Subject<boolean> = new Subject<boolean>();
  _messageInEvent: Subject<{ message: string, type: string}> = new Subject<{ message: string, type: string}>();


  constructor() {
  }

  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

   setIsLoggedIn(isLoggedIn: boolean) {
    this._isLoggedIn = isLoggedIn;
    this._isLoggedInEvent.next(this._isLoggedIn);
  }

  public get isAdmin(): boolean {
    return this._isAdmin;
  }

   setIsAdmin(isAdmin: boolean) {
    this._isAdmin = isAdmin;
  }

}
