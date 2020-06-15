import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthManagerService} from '../services/auth-manager.service';

@Component({
  selector: 'auth-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.css', '../common.scss']
})
export class SetNewPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;

  constructor(public authManager: AuthManagerService) { }

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
      this.authManager.resetPassword(verificationCode, password);
    } else {
      this.authManager.error('Passwords are not the same');
    }
  }

  backBTN() {
    this.authManager.back();
  }

}
