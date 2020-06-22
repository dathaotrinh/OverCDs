import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-myacount',
  templateUrl: './myacount.component.html',
  styleUrls: ['./myacount.component.css']
})
export class MyacountComponent implements OnInit {

  userInfo = {};
  constructor(private authService: AuthService, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
      this.authService.fetchUserData(localStorage.getItem('key').substring(1,localStorage.getItem('key').length-1)).subscribe(data => {
        // console.log(data);
        this.userInfo = data;
      })
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['home']);
    this.authService.user.next(null);
    this.cartService.cartChanged.next([]);
    this.cartService.clearCart();
  }

}
