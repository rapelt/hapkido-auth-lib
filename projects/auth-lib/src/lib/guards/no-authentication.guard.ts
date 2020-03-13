import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthenticationServices} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthenticationGuard implements CanActivate {

  constructor(private router: Router, private authState: AuthenticationServices) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('No Auth Guard - can Activate');

    if (this.authState.checkIfSessionValid()) {
      console.log('No Auth Guard - session is valid go to home');
      this.router.navigateByUrl('/home');

    } else {
      console.log('No Auth Guard - session is invalid');
      return true;
    }
  }
}
