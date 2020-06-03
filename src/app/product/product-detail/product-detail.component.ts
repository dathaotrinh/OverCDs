import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  @ViewChild('qty') qty: ElementRef;
  album: AlbumInfo = {};
  artist: string;
  name: string;
  total = 13.99;
  selectedOption: string;

  options = [
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 }
  ]

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.artist = params['artist'];
          this.name = params['name'];
        }
      )

      this.getProductInfo(this.name, this.artist)
  }


  getProductInfo(album: string, artist: string) {
    this.productService.getProduct(album, artist)
      .subscribe(res => {
        console.log(res);
        this.album = res;
      })
  }

  getTotal() {
    this.total = 13.99;
    this.total *= +this.selectedOption;
  }

}


interface AlbumInfo {
  id?: string;
  name?: string;
  artist?: {};
  image?: [];
  price?: number;
  listeners?: number;
  playcount?: number;
  tracks?: {};
  wiki?: {};
}