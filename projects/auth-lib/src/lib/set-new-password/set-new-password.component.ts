import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'auth-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.css']
})
export class SetNewPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;

  @Output()
  resetPassword: EventEmitter<{verificationCode: string, password: string}> =
    new EventEmitter<{verificationCode: string, password: string}>();

  @Output()
  back: EventEmitter<null> = new EventEmitter<null>();

  @Output()
  error: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      verification_code : new FormControl('', [Validators.required]),
      password1 : new FormControl('', [Validators.required]),
      password2 : new FormControl('', Validators.required)
    });
  }

  forgotPasswordSubmit() {
    if (this.forgotPasswordForm.invalid) {
      return;
    }

    if (this.forgotPasswordForm.get('password1').value === this.forgotPasswordForm.get('password2').value) {
      const verificationCode = this.forgotPasswordForm.get('verification_code').value.toString().trim();
      const password = this.forgotPasswordForm.get('password1').value.toString().trim();
      this.resetPassword.emit({verificationCode, password});
    } else {
      this.error.emit('Passwords are not the same');
    }
  }

}
