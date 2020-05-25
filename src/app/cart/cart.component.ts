import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { Album } from '../shared/album';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Album[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getItemInCart();
  }

  getItemInCart() {
    this.cartItems = this.cartService.getCartItems();
  }

}
