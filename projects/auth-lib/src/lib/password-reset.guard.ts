import { Injectable } from '@angular/core';
import {CanLoad, Route, UrlSegment, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthStateService} from './auth-state.service';
import {AuthStatesEnum} from './auth-states.enum';
import {Observable} from 'rxjs';
import {AuthManagerService} from './auth-manager.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetGuard implements CanActivate {

  constructor(private router: Router, private authManager: AuthManagerService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authManager.username != null) {
      return true;
    } else {
      this.router.navigateByUrl('/forgot-password');
    }
  }
}
