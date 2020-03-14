import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../User';

@Injectable()
export class SignupService {

  private accountUrl: string;

  constructor(private httpClient: HttpClient) {
    this.accountUrl = 'http://localhost:8080/account';
  }

  public findAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.accountUrl);
  }

  public createAccount(user: User) {
    return this.httpClient.post<User>(this.accountUrl, user);
  }

}
