import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = this._cookie.get('username');

  constructor(
    private _cookie: CookieService,
    private _router: Router,
  ) { console.log('app-component constructed'); }

  register() {
    this._router.navigate(['register']);
  }
}
