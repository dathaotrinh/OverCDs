import { Component, OnInit } from '@angular/core';
import { ExchangeService } from 'src/app/shared/exchange.service';
import { NgForm } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { Item } from 'src/app/shared/item.model';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css'],
})
export class AddItemFormComponent implements OnInit {
  isAuthenticated = false;
  constructor(private exchange: ExchangeService, private auth: AuthService) {}

  ngOnInit(): void {
    this.isAuthenticated = typeof localStorage
    .getItem('key') !== 'undefined' ? true : false;
  }

  onSubmitSignup(form: NgForm) {
    this.exchange.addItem(form);
  }

  fetchItems() {
    this.exchange.fetchList().subscribe(res => this.exchange.listChanged.next(res));
  }
}
