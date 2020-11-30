import { Injectable } from '@angular/core';
import {CanLoad, Route, UrlSegment, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthStateService} from '../services/auth-state.service';
import {AuthStatesEnum} from '../models/auth-states.enum';
import {Observable} from 'rxjs';
import {AuthenticationServices} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {

  constructor(private router: Router, private authState: AuthStateService, public authService: AuthenticationServices) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('Auth Guard - can Activate');

    if (this.authState.isStudent) {
      console.log('Auth Guard - is student');

      return true;
    } else {
      console.log('Auth Guard - is not student');
      this.authService.signout();

      this.authState.sendMessage('Not a student', 'error');

      this.router.navigateByUrl('/sign-in');
    }
  }
}
