import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css'],
})
export class ExchangeComponent implements OnInit {
  list = [];


  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // this.http
    // .get<ItemInterface[]>('https://posmino.firebaseio.com/items.json')
    // .pipe(
    //   map((data) => {
    //     const keys = Object.keys(data);
    //     return keys.map((key) => data[key]);
    //   })
    // )
    // .subscribe((res) => {
    //   console.log(res);
    //   this.list = res;
    // });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddItemFormComponent);
  }

  fetchItems() {
    console.log("log");
  }
}
