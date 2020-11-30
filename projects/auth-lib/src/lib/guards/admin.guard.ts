import { Injectable } from '@angular/core';
import {CanLoad, Route, UrlSegment, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthStateService} from '../services/auth-state.service';
import {AuthStatesEnum} from '../models/auth-states.enum';
import {Observable} from 'rxjs';
import {AuthenticationServices} from '../services/auth.service';
import {AuthManagerService} from '../services/auth-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private authState: AuthStateService, public authService: AuthenticationServices) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('Auth Guard - can Activate');

    if (this.authState.isAdmin) {
      console.log('Auth Guard - is admin');

      return true;
    } else {
      console.log('Auth Guard - is not admin');

      this.authState.sendMessage('Not an Admin', 'error');
      this.authService.signout();

      this.router.navigateByUrl('/sign-in');
    }
  }
}
