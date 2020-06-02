import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';

  constructor(private dialog: MatDialog, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  openSignup() {
    this.dialog.open(SignupComponent);
  }



  onSubmitLogin(form: NgForm) {
    console.log(form);
    if (!form.valid) {
      this.errorMessage = 'Please fill in the required fields.';
    } else {
      this.authService.loginUser(form.value.email, form.value.password)
        .subscribe(res => {
          console.log(res.localId);
          localStorage.setItem('key', JSON.stringify(res.localId));
          this.dialog.closeAll();
          this.router.navigate(['/home']);
        },
          error => {
            this.errorMessage = error.error.error.message;
            console.log(error.error.error.message)
          })
    }  }
}
