import {Component, OnInit} from '@angular/core';
import { AuthStateService } from 'auth-lib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'auth-library-project-2';

  constructor(public authService: AuthStateService) {
  }

  ngOnInit(): void {
    this.authService._messageInEvent.subscribe((err) => {
      console.log(err.message);
    });
  }
}
