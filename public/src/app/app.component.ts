import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private _http: HttpService,
  ) {}
  
  user_id = '';
  found_data = {
    'uniqueId': 0,
    'code': 0
  };

  onSubmit(form) {
    this._http.passID(this.user_id)
    .then(obj => {
      this.found_data = obj;
    })
    .catch(err => { console.log('ERROR:', err); })
  }
}
