import {Injectable, NgModule} from '@angular/core';
import {Routes, RouterModule, CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {FormSignUpComponent} from './form-sign-up/form-sign-up.component';
import {MenuBarComponent} from './menu-bar/menu-bar.component';
import {HomeComponent} from './home/home.component';
import {SignupService} from './services/signup.service';
import {FormSignInComponent} from './form-sign-in/form-sign-in.component';

const routes: Routes = [
  {path: 'inscription', component: FormSignUpComponent},
  {path: 'connexion', component: FormSignInComponent},
  {path: '', component: HomeComponent},
  {path: 'animes', component: HomeComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ SignupService ]
})
export class AppRoutingModule {}
