import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';

  constructor(private dialog: MatDialog, private authService: AuthService) { }

  ngOnInit(): void {
  }


  openSignup() {
    const dialogRef  = this.dialog.open(SignupComponent);
  }

  onSubmitLogin(form: NgForm) {
    console.log(form.valid);
    if (!form.valid) {
      this.errorMessage = 'Please fill in the required fields.';
    } else {
      this.authService.loginUser(form.value.email, form.value.password)
        .subscribe(res => {
          console.log(res)
        },
          error => {
            this.errorMessage = error.error.error.message;
            console.log(error.error.error.message)
          })
    }  }
}
