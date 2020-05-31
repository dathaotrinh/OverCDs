import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage: string = '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  onSubmitSignup(form: NgForm) {
    console.log(form);
    if (!form.valid) {
      this.errorMessage = 'Please fill in the required fields.';
    } else {
      this.authService.signupNewUser(form.value.email, form.value.password)
        .subscribe(res => {
          console.log(res.localId)
          this.authService.storeUserData(form, res.localId)
            .subscribe(res => {});
        },
          error => {
            this.errorMessage = error.error.error.message;
          })
    }

  }
}
