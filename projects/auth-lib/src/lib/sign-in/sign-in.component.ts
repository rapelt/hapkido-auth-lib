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
  }

  onSubmit() {
    const payload = {
      username: this.signInForm.get('username').value.toString().trim(),
      password: this.signInForm.get('password').value.toString().trim()
    };

    this.signInClicked.emit({username: payload.username, password: payload.password});
  }

}
