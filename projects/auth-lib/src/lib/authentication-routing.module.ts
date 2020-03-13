import { Routes } from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {ForcePasswordResetComponent} from './force-password-reset/force-password-reset.component';
import {SetNewPasswordComponent} from './set-new-password/set-new-password.component';
import {ApplyPasswordResetComponent} from './apply-password-reset/apply-password-reset.component';
import {VerifyEmailComponent} from './verify-email/verify-email.component';
import {PasswordResetGuard} from './guards/password-reset.guard';
import {AuthenticationGuard} from './guards/authentication.guard';
import {ForcePasswordResetGuard} from './guards/force-password-reset.guard';
import {NoAuthenticationGuard} from './guards/no-authentication.guard';

export const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in'
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [NoAuthenticationGuard]
  },
   {
    path: 'force-password-change',
    component: ForcePasswordResetComponent,
   canActivate: [ForcePasswordResetGuard]
  },
  {
    path: 'set-password',
    component: SetNewPasswordComponent,
    canActivate: [PasswordResetGuard]
  },
  {
    path: 'forgot-password',
    component: ApplyPasswordResetComponent,
    canActivate: [NoAuthenticationGuard]
  },
  {
    path: 'verify-email',
    component: VerifyEmailComponent,
    canActivate: [AuthenticationGuard]
  },
];
