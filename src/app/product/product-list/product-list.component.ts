import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Album } from 'src/app/shared/album';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  albums: Album[] = [];
  artists= [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAlbumList();
    this.getArtistList();
  }

  getAlbumList() {
    this.productService.getAlbumList()
    .subscribe(res => {
      console.log(res);
      this.albums = res;
    })
  }

  getArtistList() {
    this.productService.getArtistName()
    .subscribe(res => {
      this.artists =[... new Set(res.map(data => data.artist))];
    })
  }

}
