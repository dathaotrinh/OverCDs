import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { Album } from '../shared/album';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../auth/login/login.component';
import { AuthService } from '../auth/auth.service';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Album[];
  total = 13.99;
  isAuthenticated = false;
  
  constructor(private cartService: CartService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getItemInCart();
  }

  openLogin() {
    this.dialog.open(LoginComponent);
  }

  getItemInCart() {
    this.cartItems = this.cartService.getCartItems();
    this.total *= this.cartItems.length;
  }

}
