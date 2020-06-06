import { Injectable } from '@angular/core';
import { Album } from './album';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: Album[] = [];
  cartChanged = new Subject<Album[]>();

  constructor() {}

  addItemToCart(item: Album) {
    // console.log(item);
    this.cartList.push(item);
    this.cartChanged.next(this.cartList);
  }

  addItemsToCart(item: Album, qty: number) {
    const albumWithQty = new Album(item.id, item.name, item.artist, item.image, item.price, qty);
    this.cartList.push(albumWithQty);
    this.cartChanged.next(this.cartList);
  }

  getCartItems(): Album[] {
    return this.cartList;
  }
}
