import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthStateService} from '../services/auth-state.service';
import {AuthManagerService} from '../services/auth-manager.service';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor(public authManager: AuthManagerService) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      username : new FormControl('', [Validators.required]),
      password : new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const payload = {
      username: this.signInForm.get('username').value.toString().trim(),
      password: this.signInForm.get('password').value.toString().trim()
    };

    this.authManager.signIn(payload.username, payload.password);
  }

  forgotPasswordBTN() {
    this.authManager.forgotPasswordBTN();
  }

}
