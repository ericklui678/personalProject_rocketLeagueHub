import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  user = {
    'username': '',
    'email': '',
    'password': '',
    'following': [],
  }

  email_exists = false;

  constructor(
    private _cookie: CookieService,
    private _http: HttpService,
    private _nameService: UsernameService,
    private _router: Router,
  ) { }

  onSubmit(form) {
    this.user.email = this.user.email.toLowerCase();
    this._http.registerUser(this.user)
    .then(obj => {
      console.log('RECEIVED FROM SERVER', obj);
      if (obj.err) {
        this.email_exists = true;
      } else {
        this._cookie.set('username', obj.username);
        this._cookie.set('email', obj.email);
        this._nameService.setName(obj.username);
        this._router.navigate(['']);
      }
    })
    .catch(err => {
      console.log('ERROR ->', err);
    })
  }
}
