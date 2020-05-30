import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { Album } from '../shared/album';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Album[];
  constructor(private cartService: CartService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getItemInCart();
  }


  openLogin() {
    const dialogRef  = this.dialog.open(LoginComponent);
  }

  getItemInCart() {
    this.cartItems = this.cartService.getCartItems();
  }

}
