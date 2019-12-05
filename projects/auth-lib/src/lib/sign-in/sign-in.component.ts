import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor() { // public store: Store<AppState>, public router: Router
  }

  ngOnInit() {
    this.signInForm = new FormGroup({
      instructor : new FormControl('', [Validators.required]),
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
    // TODO Validate form
    // const payload = {
    //   username: this.signInForm.get('instructor').value.toString().trim(),
    //   password: this.signInForm.get('password').value.toString().trim()
    // };
    //
    // this.store.dispatch(new SignIn(payload));
    //
    // console.log('submit');
  }

  forgotPasswordButton() {
    // this.router.navigate(['/authentication/forgot-password']);

  }

}
