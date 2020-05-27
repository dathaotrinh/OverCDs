import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { Album } from 'src/app/shared/album';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  albums: Album[] = [];
  album: Album;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.albumSelected.subscribe(res => {
      console.log(res.name);
      this.album = res;
    });

    this.route.params
      .subscribe(
        (params: Params) => {
          console.log(params['id']);
        }
      )
  }

  getAlbumByName() {
    this.productService.getAlbumList()
      .subscribe(res => {
        this.albums = res;
        this.album = this.albums.find(data => {})
      });
  }
}
