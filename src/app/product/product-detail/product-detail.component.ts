import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { CartService } from 'src/app/shared/cart.service';
import { Album } from 'src/app/shared/album';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  @ViewChild('qty') qty: ElementRef;
  albumInfo: AlbumInfo = {};
  artist: string;
  name: string;
  total = 13.99;
  selectedOption: string;
  albums: Album[];
  page;

  options = [
    { name: '1', value: 1 },
    { name: '2', value: 2 },
    { name: '3', value: 3 },
    { name: '4', value: 4 },
    { name: '5', value: 5 },
    { name: '6', value: 6 },
    { name: '7', value: 7 },
    { name: '8', value: 8 },
    { name: '9', value: 9 },
  ];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.artist = params['artist'];
      this.name = params['name'];
      this.page = params['page']
    });

    this.getProductInfo(this.name, this.artist);

    this.productService
      .getAlbumList(this.page)
      .subscribe((res) => (this.albums = res));
  }

  getProductInfo(album: string, artist: string) {
    this.productService.getProduct(album, artist).subscribe((res) => {
      //console.log(res);
      this.albumInfo = res;
    });
  }

  getTotal() {
    this.total = 13.99;
    this.total *= +this.selectedOption;
    console.log(this.albums);
    const item = this.albums.find((ele) => ele.name === this.name);
    console.log(item);
    this.cartService.addItemsToCart(item, +this.selectedOption);
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
