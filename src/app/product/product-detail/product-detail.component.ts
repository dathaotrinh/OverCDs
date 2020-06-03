import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  album: AlbumInfo = {};
  artist: string;
  name: string;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

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