import { Injectable } from '@angular/core';
import { Album } from './album';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList: Album[] = [];

  constructor() { }

  addItemToCart(item: Album) {
    this.cartList.push(item);
  }

}
