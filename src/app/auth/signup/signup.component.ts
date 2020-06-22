import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage: string = '';
  constructor(private authService: AuthService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitSignup(form: NgForm) {
    if (!form.valid) {
      // if(form.value.zipcode.length() != 5) {
      //   this.errorMessage = 'Please use 5 digit zip code.';        
      // } else{
      //   this.errorMessage = 'Please fill in the required fields.';
      // }
    } else {
      this.authService.signupNewUser(form.value.email, form.value.password)
        .subscribe(res => {
          // console.log(res.localId)
          localStorage.setItem('key', JSON.stringify(res.localId));
          this.authService.storeUserData(form, res.localId)
            .subscribe();
          this.dialog.closeAll();
          this.router.navigate(['/products/1']);
        },
          error => {
            this.errorMessage = error.error.error.message;
          })
    }

  }
}
