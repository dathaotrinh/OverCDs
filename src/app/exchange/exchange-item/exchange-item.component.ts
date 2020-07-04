import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exchange-item',
  templateUrl: './exchange-item.component.html',
  styleUrls: ['./exchange-item.component.css']
})
export class ExchangeItemComponent implements OnInit {

  @Input() list = [];
  constructor() { }

  ngOnInit(): void {
  }

}
