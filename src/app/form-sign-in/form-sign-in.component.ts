import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthentificationService} from '../services/authentificationService';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss']
})
export class FormSignInComponent implements OnInit {

  formSignIn: FormGroup;

  pseudo: string;
  password: string;
  errorMessage = 'Informations invalide';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  errorMessages = {
    'pseudo': [
      {type: 'required', message: 'Le pseudonyme est requis'}
    ],
    'password': [
      {type: 'required', message: 'Le mot de passe est requis'}
    ]
  };

  constructor(private route: ActivatedRoute, private router: Router, private authentificationService: AuthentificationService, public formBuilder: FormBuilder) {
    this.formSignIn = this.formBuilder.group({
      pseudo: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required]))
    })
  };

  ngOnInit() {
  }

  handleLogin() {
    this.authentificationService.authenticationService(this.pseudo, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate([''])
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }

}
