import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthStateService} from '../auth-state.service';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  @Output()
  signInClicked: EventEmitter<{username: string, password: string}> = new EventEmitter<{username: string, password: string}>();

  constructor() { // public store: Store<AppState>, public router: Router
  }

  ngOnInit() {
    this.signInForm = new FormGroup({
      username : new FormControl('', [Validators.required]),
      password : new FormControl('', Validators.required)
    });

    // this.store.select(selectAuthenticationState).subscribe((userState) => {
    //   if (userState === AuthenticationStates.LOGGEDIN) {
    //     console.log('should move to home');
    //     this.router.navigate(['/home']);
    //   }
    // });
  }

  onSubmit() {
    debugger;
    const payload = {
      username: this.signInForm.get('username').value.toString().trim(),
      password: this.signInForm.get('password').value.toString().trim()
    };

    this.signInClicked.emit({username: payload.username, password: payload.password});

    console.log('submit');
  }

  forgotPasswordButton() {
    // this.router.navigate(['/authentication/forgot-password']);

  }

}
