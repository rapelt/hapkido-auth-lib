import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthManagerService} from '../auth-manager.service';

@Component({
  selector: 'auth-force-password-reset',
  templateUrl: './force-password-reset.component.html',
  styleUrls: ['./force-password-reset.component.css']
})
export class ForcePasswordResetComponent implements OnInit {

  resetPasswordForm: FormGroup;

  constructor(public authManager: AuthManagerService) { }

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      password1 : new FormControl('', [Validators.required]),
      password2 :
        new FormControl(
          '',
          [Validators.required]
        )
    });
  }

  onResetPassword() {
    if (this.resetPasswordForm.invalid) {
      return;
    }

    if (this.resetPasswordForm.get('password1').value === this.resetPasswordForm.get('password2').value) {
      const password = this.resetPasswordForm.get('password1').value.toString().trim();
      this.authManager.forcePasswordReset(password);
    } else {
      this.authManager.error('Passwords are not the same');
    }
  }

  backBTN() {
    this.authManager.back();
  }

}
