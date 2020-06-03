import { Injectable } from '@angular/core';
import { Album } from './album';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList: Album[] = [];
  cartChanged = new Subject<Album[]>();

  constructor() { }

  addItemToCart(item: Album) {
    this.cartList.push(item);
    this.cartChanged.next(this.cartList);
  }

  // addItemsToCart(item: Album, qty: number) {
  //   while(qty > 0) {
  //     this.cartList.push(item);
  //     qty--;
  //   }
  //   this.cartChanged.next(this.cartList);
  // }

  getCartItems(): Album[] {    
    return this.cartList;
  }

}
