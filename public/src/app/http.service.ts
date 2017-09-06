import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(
    private _http: Http,
  ) { }

  passID(user_id) {
    return this._http.get('/player/' + user_id)
    .map( data => data.json() )
    .toPromise();
  }
}
