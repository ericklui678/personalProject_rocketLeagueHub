import { Component, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from './http.service';
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
  user = {
    'email': '',
    'password': '',
  }

  constructor(
    private _cookie: CookieService,
    private _http: HttpService,
    private _nameService: UsernameService,
    private _router: Router,
  ) {
    this.subscription = this._nameService.getName().subscribe(name => { this.username = name; })
  }

  register() {
    this._router.navigate(['register']);
  }

  logon(form) {
    this.user.email = this.user.email.toLowerCase();
    this._http.loginUser(this.user)
    .then(obj => {
      if (obj.err) {
        console.log('ERRORS', obj.err);
      } else {
        this._cookie.set('username', obj.username);
        this._cookie.set('email', obj.email);
        this._nameService.setName(obj.username);
      }
    })
    .catch( err => {
      console.log('ERROR ->', err);
    })
  }

  logout() {
    this._cookie.deleteAll();
    this._nameService.clearName();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
