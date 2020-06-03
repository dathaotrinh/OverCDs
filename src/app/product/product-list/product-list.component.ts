import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Album } from 'src/app/shared/album';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  albums: Album[] = [];
  artists= [];
  page = 1;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAlbumList(this.page);
    this.getArtistList();  
  }

  getAlbumList(i: number) {
    this.productService.getAlbumList(i)
    .subscribe(res => {
      this.albums = res;
    })
  }

  getArtistList() {
    this.productService.getArtistName()
    .subscribe(res => {
      this.artists =[... new Set(res.map(data => data.artist))];
    })
  }

  onPrevious() {
    this.page -= 1;
    this.getAlbumList(this.page);
  }

  onNext() {
    this.page += 1;
    this.getAlbumList(this.page);
  }
}
