import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  numberOfItems = 0;
  inputSearch = '';

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartChanged
      .subscribe(data => {
        this.numberOfItems = data.length
      });
  }

}
