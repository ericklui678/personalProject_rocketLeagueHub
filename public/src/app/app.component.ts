import { Component, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UsernameService } from './username.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = this._cookie.get('username');
  subscription: Subscription;

  constructor(
    private _cookie: CookieService,
    private _nameService: UsernameService,
    private _router: Router,
  ) {
    this.subscription = this._nameService.getName().subscribe(name => { this.username = name; })
  }

  register() {
    this._router.navigate(['register']);
  }

  logout() {
    this._cookie.delete('username');
    this._nameService.clearName();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
