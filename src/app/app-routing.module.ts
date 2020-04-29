import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthLibModule} from '../../projects/auth-lib/src/lib/auth-lib.module';
import {AuthenticationGuard} from 'hapkido-auth-lib';
import {OtherPageComponent} from './other-page/other-page.component';


const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () => AuthLibModule
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'other-page',
    component: OtherPageComponent,
    canActivate: [AuthenticationGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
