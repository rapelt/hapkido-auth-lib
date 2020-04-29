import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLibModule } from 'hapkido-auth-lib';
import {IonicModule} from '@ionic/angular';
import {config} from '../environments/environment';
import {HomeComponent} from './home/home.component';
import { OtherPageComponent } from './other-page/other-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtherPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthLibModule.forRoot(config),
    IonicModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }


