import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(
    private _http: Http,
  ) { }

  passID(obj) {
    return this._http.get('/player/' + obj.uid + '/' + obj.pid)
    .map( data => data.json() )
    .toPromise();
  }

  registerUser(obj) {
    console.log('SERVICE', obj);
    return this._http.post('/user/create', obj)
    .map( data => data.json() )
    .toPromise();
  }
}
