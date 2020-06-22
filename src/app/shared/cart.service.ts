import { Injectable } from '@angular/core';
import { Album } from './album';
import { Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: Album[] = [];
  cartChanged = new Subject<Album[]>();

  constructor(private auth: AuthService, private http: HttpClient) {}

  addItemsToCart(item: Album, qty: number) {
    const albumWithQty = new Album(
      item.id,
      item.name,
      item.artist,
      item.image,
      item.price,
      qty
    );
    this.cartList.push(albumWithQty);

    if (typeof localStorage.getItem('key') !== 'object') {
      const saveLink =
        'https://overcds-c873e.firebaseio.com/users/' +
        localStorage
          .getItem('key')
          .substring(1, localStorage.getItem('key').length - 1) +
        '.json';
      this.http
        .patch(saveLink, {
          products: this.cartList,
        })
        .subscribe((res) => {
        });
    }
    this.cartChanged.next(this.cartList);
  }

  fetchItems() {
    if (typeof localStorage.getItem('key') !== 'object') {
      const saveLink =
        'https://overcds-c873e.firebaseio.com/users/' +
        localStorage
          .getItem('key')
          .substring(1, localStorage.getItem('key').length - 1) +
        '/products.json';
      this.http
        .get<Album[]>(saveLink)
        .subscribe((res) => {
          this.cartList.push(...res);
          this.cartChanged.next(this.cartList);
        });

    }
  }

  getCartItems(): Album[] {
    return this.cartList;
  }

  clearCart() {
    this.cartList = [];
  }
}
