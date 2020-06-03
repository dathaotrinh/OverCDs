import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { NavService } from '../shared/nav.service';
import { AuthService } from '../auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  numberOfItems = 0;
  isAuthenticated = false;
  constructor(private cartService: CartService, private navService: NavService, private authService: AuthService, private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.cartService.cartChanged
      .subscribe(data => {
        this.numberOfItems = data.length
      });
      this.authService.user.subscribe(user => {
        this.isAuthenticated = !user ? false: true;
      })
  }

  setInput(input: string) {
    this.navService.inputSearchChanged.next(input);
    this.searchInput.nativeElement.value = '';
  }

  openLogin() {
    this.dialog.open(LoginComponent);
  }
}
