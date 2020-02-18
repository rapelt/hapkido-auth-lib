import { Injectable } from '@angular/core';
import {CanLoad, Route, UrlSegment, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthStateService} from './auth-state.service';
import {AuthStatesEnum} from './auth-states.enum';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router, private authState: AuthStateService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authState.isLoggedIn === AuthStatesEnum.LoggedIn) {
      return true;
    } else {
      this.router.navigateByUrl('/sign-in');
    }
  }
}
