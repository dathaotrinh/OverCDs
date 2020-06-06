import { Injectable, OnInit } from '@angular/core';
import { AlbumInterface } from './album.interface';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { Album } from './album';
import { AlbumInfo } from './albumInfor.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  private apiKey = "143579767c21ff50b45aea9f80b8c1a2";
  private url = "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&api_key=" + this.apiKey + "&format=json";
  pageChanged= new Subject<number>();


  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }

  getArtistName() : Observable<AlbumInterface[]> {
    return this.http.get<AlbumInterface[]>(this.url)
      .pipe(
        map(res => res['albums']['album']),
        map(res => {
          return res.map(data => {
            return {
              artist: data.artist.name
            }
          })
        }
      ))
  }
  
  getAlbumList(i: number) : Observable<AlbumInterface[]>{
    return this.http.get<AlbumInterface[]>(this.url + '&page=' + i)
      .pipe(
        map(res => res['albums']['album']),
        map(res => {
          return res.map(data => {
            return {
              id: uuid(),
              name: data.name,
              artist: data.artist,
              image: data.image[2]['#text'],
              price: 13.99              
            }
          })
        })
      )    
  }


  getProduct(album: string, artist: string): Observable<AlbumInfo> {
    const albumUrl = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=" + this.apiKey + "&artist=" + artist + "&album=" + album + "&format=json"
    return this.http.get<AlbumInfo>(albumUrl)
            .pipe(
              map(res => res['album']),
              map(data => {
                console.log(typeof(data.wiki))
                console.log(data.wiki)

                return {
                  artist: data.artist,
                  image: data.image[5]['#text'],
                  price: 13.99,
                  listeners: data.listeners ,
                  name: data.name ,
                  playcount: data.playcount,
                  tracks: data.tracks.track,
                  wiki: typeof(data.wiki) === 'undefined' ?  '' : data.wiki.summary
                }
              }),

              )
      }
}
