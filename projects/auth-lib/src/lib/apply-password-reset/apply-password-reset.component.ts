import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthManagerService} from '../services/auth-manager.service';

@Component({
  selector: 'auth-apply-password-reset',
  templateUrl: './apply-password-reset.component.html',
  styleUrls: ['./apply-password-reset.component.css']
})
export class ApplyPasswordResetComponent implements OnInit {

  usernameForm: FormGroup;

  constructor(public authManager: AuthManagerService) { }

  ngOnInit() {
    this.usernameForm = new FormGroup({
      username : new FormControl('', [Validators.required])
    });
  }

  usernameSubmit() {
    const username = this.usernameForm.get('username').value.toString().trim();
    this.authManager.applyPasswordReset(username);
  }

  backBTN() {
    this.authManager.back();
  }

}
