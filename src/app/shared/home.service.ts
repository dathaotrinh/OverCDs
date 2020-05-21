import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HomeService implements OnInit {

  private apiKey = "143579767c21ff50b45aea9f80b8c1a2";
  private url = "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&api_key=" + this.apiKey + "&format=json";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url)
      .pipe(
        map(res => res['albums']),
        map(res => res['album'])
      )
      .subscribe(res => console.log(res));
  }
}
