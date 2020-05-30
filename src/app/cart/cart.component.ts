import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { Album } from '../shared/album';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../auth/login/login.component';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Album[];
  isLogin: boolean;
  constructor(private cartService: CartService, private dialog: MatDialog, private authService: AuthService) { }

  ngOnInit(): void {
    this.getItemInCart();
    this.isLoginState();
  }

  isLoginState() {
    this.authService.isLogin
      .subscribe(res => {
        this.isLogin = res;
        console.log(this.isLogin);
      })
  }

  openLogin() {
    this.dialog.open(LoginComponent);
  }

  getItemInCart() {
    this.cartItems = this.cartService.getCartItems();
  }

}
