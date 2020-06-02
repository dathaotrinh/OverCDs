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
    console.log(form);
    if (!form.valid) {
      this.errorMessage = 'Please fill in the required fields.';
    } else {
      this.authService.signupNewUser(form.value.email, form.value.password)
        .subscribe(res => {
          console.log(res.localId)
          localStorage.setItem('key', JSON.stringify(res.localId));
          this.authService.storeUserData(form, res.localId)
            .subscribe();
          this.dialog.closeAll();
          this.router.navigate(['/products']);
        },
          error => {
            this.errorMessage = error.error.error.message;
          })
    }

  }
}
