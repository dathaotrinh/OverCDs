import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Auth } from './auth';
import { catchError , tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiKey = 'AIzaSyAaz4kQMCaZZw0GnFNJQ7dPk9GAS9zvoOA';

  private signupLink = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';

  constructor(private http: HttpClient) { }

  // signupNewUser(email: string, password: string) {
  //   this.http.post<Auth>(this.signupLink + this.apiKey, {
  //     email: email,
  //     password: password,
  //     returnSecureToken: true
  //   }).pipe(
  //     catchError(error => this.handleError(error))
  //   )
  // }

  // private handleError(error: HttpErrorResponse){
  //   let errorMessage = 'An unknown error!';
    
  // }
}
