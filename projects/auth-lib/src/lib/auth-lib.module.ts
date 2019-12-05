import { NgModule } from '@angular/core';
import { AuthLibComponent } from './auth-lib.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AuthLibComponent, SignInComponent],
  imports: [
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [AuthLibComponent]
})
export class AuthLibModule { }
