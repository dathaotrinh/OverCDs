import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-myacount',
  templateUrl: './myacount.component.html',
  styleUrls: ['./myacount.component.css']
})
export class MyacountComponent implements OnInit {

  firstname: string = 'abc';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe(res => {
      this.authService.fetchUserData(res.id).subscribe(data => {
        console.log(data['firstname']);
        this.firstname = data['firstname'];
      })
    })
  }

}
