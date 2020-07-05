import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { ExchangeService } from '../shared/exchange.service';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css'],
})
export class ExchangeComponent implements OnInit {
  list:Item[] = [];
  dialogValue: any;

  constructor(private dialog: MatDialog, private exchange: ExchangeService) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddItemFormComponent, {
      data: this.list,
    });
  }

  fetchItems() {
    this.exchange.fetchList().subscribe((res) => {
      this.list = res;
    });
  }
}
