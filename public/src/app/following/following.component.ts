import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  following = [];
  unranked: string = '/assets/images/ranks/unranked.png';

  constructor(
    private _cookie: CookieService,
    private _http: HttpService,
  ) { }

  ngOnInit() {
    this.getFollows();
  }

  getFollows() {
    this._http.getFollows(this._cookie.get('email'))
    .then( obj => {
      console.log(obj);
    })
    .catch( err => {
      console.log(err);
    })
  }
}
