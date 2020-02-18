import { Injectable } from '@angular/core';
import {CanLoad, Route, UrlSegment, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthStateService} from '../services/auth-state.service';
import {AuthStatesEnum} from '../models/auth-states.enum';
import {Observable} from 'rxjs';
import {AuthenticationServices} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router, private authState: AuthenticationServices) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authState.checkIfSessionValid()) {
      return true;
    } else {
      this.router.navigateByUrl('/sign-in');
    }
  }
}
