import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { NavService } from '../shared/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 // searchInput ='';
  numberOfItems = 0;

  constructor(private cartService: CartService, private navService: NavService) { }

  ngOnInit(): void {
    this.cartService.cartChanged
      .subscribe(data => {
        this.numberOfItems = data.length
      });
  }

  setInput(input: string) {
    this.navService.inputSearchChanged.next(input);
  }
}
