import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import { FormSignUpComponent } from './form-sign-up/form-sign-up.component';
import {SignupService} from './services/signup.service';
import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Validators } from '@angular/forms';
import { AccountListComponent } from './account-list/account-list.component';
import { FormSignInComponent } from './form-sign-in/form-sign-in.component';
import {HttpInterceptorService} from './services/HttpInterceptorService';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    FormSignUpComponent,
    HomeComponent,
    AccountListComponent,
    FormSignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers:

    [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  },
    SignupService
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
