import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/home.service';
import { Album } from '../shared/album';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  albums: Album[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getAlbumList()
      .subscribe(res => {
        console.log(res);
        this.albums = res;
    })
  }

}
