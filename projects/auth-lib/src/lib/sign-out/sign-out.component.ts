import { Component, OnInit } from '@angular/core';
import {AuthStateService} from '../services/auth-state.service';
import {AuthenticationServices} from '../services/auth.service';

@Component({
  selector: 'auth-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  isSignedIn;

  constructor(public authStateService: AuthStateService, public authService: AuthenticationServices) {
    this.authStateService._isLoggedInEvent.subscribe((isLoggedIn) => {
      this.isSignedIn = isLoggedIn;
    });

    this.isSignedIn = this.authStateService.isLoggedIn;

  }

  ngOnInit() {
  }

  logout() {
    this.authService.signout();
  }

}
