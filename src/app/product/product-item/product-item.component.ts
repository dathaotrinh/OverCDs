import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/shared/album';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() albums = [];
  albumSelected: Album;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addItemToCart(index: number): void{
    this.cartService.addItemToCart(this.albums[index]);
  }

}
