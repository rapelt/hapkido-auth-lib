import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import {AuthStateService} from './auth-state.service';
import {AuthStatesEnum} from './auth-states.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {
  constructor(private authService: AuthStateService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean {
    return this.authService.isLoggedIn === AuthStatesEnum.LoggedIn;
  }
}
