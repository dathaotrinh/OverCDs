import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/shared/album';
import { CartService } from 'src/app/shared/cart.service';
import { NavService } from 'src/app/shared/nav.service';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() albums = [];
  albumSelected: Album;
  searchInput = ''; 

  constructor(private cartService: CartService, private navService: NavService, private productService: ProductService) { }

  ngOnInit(): void {
    this.getSearchInput();
  }

  setSelectedAlbum(album: Album) {
    this.productService.albumSelected.next(album);
  }
  addItemToCart(id: string): void{
    const item = this.albums.find(ele => ele.id === id);
    this.cartService.addItemToCart(item);
  }

  getSearchInput() {
    this.navService.inputSearchChanged.subscribe(res => {
      this.searchInput = res;
    })
  }

}
