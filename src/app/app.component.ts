import {Component, OnInit} from '@angular/core';
import {AuthStateService} from '../../projects/auth-lib/src/lib/services/auth-state.service';
import {AuthenticationServices} from '../../projects/auth-lib/src/lib/services/auth.service';
// import {AuthenticationServices, AuthStateService} from 'hapkido-auth-lib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'auth-library-project-2';

  constructor(public authService: AuthStateService, public auth: AuthenticationServices) {
  }

  ngOnInit(): void {
    this.auth.load().then(() => {
      console.log('App Init');
      this.authService._messageInEvent.subscribe((err) => {
        console.log(err.message);
      });
    });

  }
}
