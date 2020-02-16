import {Injectable, ModuleWithProviders, NgModule} from '@angular/core';
import { AuthLibComponent } from './auth-lib.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthenticationServices} from './auth.service';
import {AuthStateService} from './auth-state.service';
import { SignOutComponent } from './sign-out/sign-out.component';
import { ForcePasswordResetComponent } from './force-password-reset/force-password-reset.component';
import { ApplyPasswordResetComponent } from './apply-password-reset/apply-password-reset.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AuthSeviceMock } from './authentication.service.mock';

@NgModule({
  declarations: [AuthLibComponent, SignInComponent, SignOutComponent, ForcePasswordResetComponent, ApplyPasswordResetComponent, SetNewPasswordComponent, VerifyEmailComponent],
  imports: [
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    AuthStateService
  ],
  exports: [AuthLibComponent, SignOutComponent]
})


@Injectable({
  providedIn: 'root'
})
export class AuthLibModule {
  public static forRoot(config: any): ModuleWithProviders {
    return {
      ngModule: AuthLibModule,
      providers: [
        {
          provide: 'config', // you can also use InjectionToken
          useValue: config
        },
         config.ionicEnvName === 'local' || config.ionicEnvName === 'test' ? { provide: AuthenticationServices, useClass: AuthSeviceMock }
          : AuthenticationServices,
        AuthStateService
      ]
    };
  }
}


