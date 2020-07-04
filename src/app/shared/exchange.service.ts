import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UUID } from 'angular2-uuid';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  private itemLink = 'https://overcds-c873e.firebaseio.com/items.json';
  list: Item[] = [];
  listChanged = new Subject<Item[]>();

  constructor(private http: HttpClient) {}

  addItem(form: NgForm) {
    console.log(form.value);
    const userID = localStorage
      .getItem('key')
      .substring(1, localStorage.getItem('key').length - 1);
    const itemId = UUID.UUID();
    const newItem = new Item(
      form.value.name,
      itemId,
      form.value.image,
      form.value.type,
      userID,
      false,
      form.value.lastname,
      form.value.description
    );
    this.list.push(newItem);
    this.listChanged.next(this.list);
    this.http.post(this.itemLink, newItem).subscribe(res => console.log(res));
  }

  fetchList() {
    return this.http
      .get<ItemInterface[]>(this.itemLink)
      .pipe(
        map((data) => {
          const keys = Object.keys(data);
          return keys.map((key) => data[key]);
        })
      )
  }

}

export interface ItemInterface {
  name: string;
  id: string;
  image: string;
  type: string;
  userID: string;
  isDone: boolean;
  username: string;
  description: string;
}
