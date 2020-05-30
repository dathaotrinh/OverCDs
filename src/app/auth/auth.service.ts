import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthResponseData } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiKey = 'AIzaSyAaz4kQMCaZZw0GnFNJQ7dPk9GAS9zvoOA';

  private signupLink = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';

  constructor(private http: HttpClient) { }

  signupNewUser(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.signupLink + this.apiKey, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }

  // private handleError(error: HttpErrorResponse){
  //   let errorMessage = 'An unknown error!';
    
  // }
}
