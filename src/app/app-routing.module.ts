import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
// import {AuthenticationGuard, AuthLibModule} from 'hapkido-auth-lib';
import {OtherPageComponent} from './other-page/other-page.component';
import {AuthLibModule} from '../../projects/auth-lib/src/lib/auth-lib.module';
import {AuthenticationGuard} from '../../projects/auth-lib/src/lib/guards/authentication.guard';
import {AdminGuard} from '../../projects/auth-lib/src/lib/guards/admin.guard';
import {StudentGuard} from '../../projects/auth-lib/src/lib/guards/student.guard';


const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () => AuthLibModule
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticationGuard, AdminGuard],
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
