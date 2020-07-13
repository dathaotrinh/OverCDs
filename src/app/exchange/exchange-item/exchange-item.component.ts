import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from 'src/app/shared/item.model';
import { AuthService } from 'src/app/auth/auth.service';
import { ExchangeService } from 'src/app/shared/exchange.service';

@Component({
  selector: 'app-exchange-item',
  templateUrl: './exchange-item.component.html',
  styleUrls: ['./exchange-item.component.css'],
})
export class ExchangeItemComponent implements OnInit {
  @Input() list: Item[] = [];
  private backendUrl = "https://overcds-sendingemail.herokuapp.com/";
  constructor(private http: HttpClient, private auth: AuthService, private exchange: ExchangeService) {}

  ngOnInit(): void {}

  onReceiveItem(itemId: string) {
    const item = this.list.find((element) => element.id === itemId);

    const contributor = item.userID;
    const donee = localStorage
      .getItem('key')
      .substring(1, localStorage.getItem('key').length - 1);
    this.auth.fetchUserData(contributor).subscribe((res) => {
      this.http
        .post(this.backendUrl + 'sendThankyouEmail', res['email'])
        .subscribe();
    });

    this.auth.fetchUserData(donee).subscribe((res) => {
      this.http
        .post(this.backendUrl + 'sendConfirmEmail', res['email'])
        .subscribe();
    });

    this.exchange.deleteItem(itemId);

  }

  onDonateItem(itemId: string) {
    const item = this.list.find((element) => element.id === itemId);
    const contributor = item.userID;
    const donee = localStorage
      .getItem('key')
      .substring(1, localStorage.getItem('key').length - 1);
    this.auth.fetchUserData(contributor).subscribe((res) => {
      this.http
        .post('http://localhost:8080/sendThankyouEmail', res['email'])
        .subscribe();
    });

    this.auth.fetchUserData(donee).subscribe((res) => {
      this.http
        .post('http://localhost:8080/sendConfirmEmail', res['email'])
        .subscribe();
    });

    console.log(itemId);
    this.exchange.deleteItem(itemId);
  }
}
