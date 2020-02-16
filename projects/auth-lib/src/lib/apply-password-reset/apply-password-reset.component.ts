import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'auth-apply-password-reset',
  templateUrl: './apply-password-reset.component.html',
  styleUrls: ['./apply-password-reset.component.css']
})
export class ApplyPasswordResetComponent implements OnInit {

  usernameForm: FormGroup;

  @Output()
  applyResetPassword: EventEmitter<{username: string}> = new EventEmitter<{username: string}>();

  @Output()
  back: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
    this.usernameForm = new FormGroup({
      username : new FormControl('', [Validators.required])
    });
  }

  usernameSubmit() {
    const username = this.usernameForm.get('username').value.toString().trim();
    this.applyResetPassword.emit({username});
  }

  backBTN() {
    this.back.emit();
  }

}
