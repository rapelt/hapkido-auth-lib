import {Component, Input, OnInit} from '@angular/core';
import {AuthStateService} from '../services/auth-state.service';
import {AuthenticationServices} from '../services/auth.service';

@Component({
  selector: 'auth-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  @Input()
  config = {
    lines: 'inset',
    detail: false,
    routerDirection: 'root',
    iconColor: 'tertiary'
  };

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
