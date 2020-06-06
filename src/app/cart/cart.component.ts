import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { Album } from '../shared/album';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Album[];
  total = 0;
  isAuthenticated = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getItemInCart();
  }

  getItemInCart() {
    let price = 13.99;
    this.cartItems = this.cartService.getCartItems();
    for (let i = 0; i < this.cartItems.length; i++) {
      this.total += price * this.cartItems[i].qty;
    }
  }
}
