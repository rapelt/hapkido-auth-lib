import { Component, OnInit } from '@angular/core';
import {AuthManagerService} from '../services/auth-manager.service';

@Component({
  selector: 'auth-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(public authManager: AuthManagerService) { }

  ngOnInit() {
  }

}
