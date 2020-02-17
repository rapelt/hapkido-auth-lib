import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'auth-force-password-reset',
  templateUrl: './force-password-reset.component.html',
  styleUrls: ['./force-password-reset.component.css']
})
export class ForcePasswordResetComponent implements OnInit {

  resetPasswordForm: FormGroup;

  @Output()
  forcePasswordReset: EventEmitter<{password: string}> = new EventEmitter<{password: string}>();

  @Output()
  back: EventEmitter<null> = new EventEmitter<null>();

  @Output()
  error: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

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
      this.forcePasswordReset.emit({password});
    } else {
      this.error.emit('Passwords are not the same');
    }
  }

  backBTN() {
    this.back.emit();
  }

}
