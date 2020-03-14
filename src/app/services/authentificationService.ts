import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


const apiURL = 'http://localhost:8080/account';

export class AuthentificationService {

  /*BASE_PATH: 'http://localhost:8080/account'*/
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authentificatedUser'

  public pseudo: String;
  public password: String;

  constructor(private http: HttpClient) {
  }

  authenticationService(username: String, password: String) {
    return this.http.get(`http://localhost:8080/account`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
      this.pseudo = this.pseudo;
      this.password = password;
      this.registerSuccessFullLogin(username, password);
    }));
  }

  createBasicAuthToken(pseudo: String, password: String){
    return 'Basic ' + window.btoa(pseudo + ":" + password)
  }

  registerSuccessFullLogin(pseudo, password){
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, pseudo)
  }

  logout(){
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.pseudo = null;
    this.password = null;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user == null) return false
    return true
  }

  getLoggedInUserName(){
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user == null) return ''
    return user
  }
}
