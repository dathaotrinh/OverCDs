import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { ExchangeService } from '../shared/exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css'],
})
export class ExchangeComponent implements OnInit {
  list = [];

  constructor(
    private dialog: MatDialog,
    private exchange: ExchangeService
  ) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddItemFormComponent);
  }

  fetchItems() {
    console.log("log");

    this.exchange.fetchList().subscribe((res) => {
      console.log(res);
      this.list = res;
    });;
  }
}
