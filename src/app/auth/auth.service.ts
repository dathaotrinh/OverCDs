import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthResponseData } from './auth';
import { Subject } from 'rxjs';
import { User } from './user.model';
import { tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new Subject<User>();
  private apiKey = 'AIzaSyAaz4kQMCaZZw0GnFNJQ7dPk9GAS9zvoOA';
  private signupLink = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  private loginLink = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
  private link = 'https://overcds-c873e.firebaseio.com/users/';

  constructor(private http: HttpClient) { }

  signupNewUser(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.signupLink + this.apiKey, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap(res => {
        const expireTime = new Date(new Date().getTime() + +res.expiresIn * 1000);
        const user = new User(res.email, res.localId, res.idToken, expireTime);
        this.user.next(user);
      })
    )

  }

  loginUser(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.loginLink + this.apiKey, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap(res => {
        const expireTime = new Date(new Date().getTime() + +res.expiresIn * 1000);
        const user = new User(res.email, res.localId, res.idToken, expireTime);
        this.user.next(user);
      })
    )
  }

  storeUserData(form: NgForm, id: string) {
    return this.http.put(this.link + id + '.json', form.value);
  }

  fetchUserData(id: string) {
    return this.http.get(this.link + id + '.json');
  }

}
