import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmitSignUp(form: NgForm) {
    console.log(form.value);
    if(!form.valid){
      return;
    }
    this.authService.signupNewUser(form.value.email, form.value.password)
      .subscribe(res => {
        console.log(res)
      }, 
        error => {
          console.log(error.error.error.message)
        }
      )
  }
}
