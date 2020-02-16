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
  forcePasswordReset: EventEmitter<{username: string, password: string}> = new EventEmitter<{username: string, password: string}>();

  @Output()
  back: EventEmitter<null> = new EventEmitter<null>();

  constructor() {}

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      username : new FormControl('', [Validators.required]),
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
      // this.messageServiceService.updateError.next('You must enter a username and password');
      return;
    }

    if (this.resetPasswordForm.get('password1').value === this.resetPasswordForm.get('password2').value) {
      const username = this.resetPasswordForm.get('username').value.toString().trim();
      const password = this.resetPasswordForm.get('password1').value.toString().trim();
      this.forcePasswordReset.emit({username, password});
    } else {
      // this.messageService.updateError.next('Your passwords didn\'t match. Please try again.');
    }
  }

  backBTN() {
    this.back.emit();
  }

}
