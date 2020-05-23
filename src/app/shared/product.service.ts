import { Injectable, OnInit } from '@angular/core';
import { AlbumInterface } from './album.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  private apiKey = "143579767c21ff50b45aea9f80b8c1a2";
  private url = "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&api_key=" + this.apiKey + "&format=json";

  constructor(private http: HttpClient) { }


  ngOnInit(): void {

  }

  
  getAlbumList() : Observable<AlbumInterface[]>{
    return this.http.get<AlbumInterface>(this.url)
      .pipe(
        map(res => res['albums']),
        map(res => res['album']),
        map(res => {
          return res.map(data => {
            return {
              name: data.name,
              artist: data.artist,
              image: data.image[2]['#text'],
              price: 13.99              
            }
          })
        })
      )    
  }
}
