import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthManagerService} from '../services/auth-manager.service';

/**
 * Generated class for the VerifyEmailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'auth-verify-email',
  templateUrl: 'verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  verifyEmailForm: FormGroup;

  constructor(private auth: AuthManagerService) {}

  ngOnInit(): void {
    this.verifyEmailForm = new FormGroup({
      code : new FormControl('', [Validators.required])
    });

    this.auth.applyForVerifyEmail();
  }

  verifyEmailSubmit() {
    this.auth.verifyEmail(this.verifyEmailForm.get('code').value);
  }
}
