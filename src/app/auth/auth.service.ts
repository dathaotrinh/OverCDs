import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthResponseData } from './auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = new Subject<boolean>();
  private apiKey = 'AIzaSyAaz4kQMCaZZw0GnFNJQ7dPk9GAS9zvoOA';

  private signupLink = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';

  private loginLink = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

  constructor(private http: HttpClient) { }

  signupNewUser(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.signupLink + this.apiKey, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }

  loginUser(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.loginLink + this.apiKey, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }

}
