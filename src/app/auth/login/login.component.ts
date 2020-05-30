import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openSignup() {
    const dialogRef  = this.dialog.open(SignupComponent);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
