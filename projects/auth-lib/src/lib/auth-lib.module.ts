import {ModuleWithProviders, NgModule} from '@angular/core';
import { AuthLibComponent } from './auth-lib.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthenticationServices} from './auth.service';
import {AuthStateService} from './auth-state.service';

@NgModule({
  declarations: [AuthLibComponent, SignInComponent],
  imports: [
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    AuthenticationServices,
    AuthStateService
  ],
  exports: [AuthLibComponent]
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
        AuthStateService
      ]
    };
  }
}


