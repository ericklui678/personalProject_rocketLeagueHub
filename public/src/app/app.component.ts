import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user_id: string = '';
  found_data = {
    'uniqueId': 0,
    'code': 0
  };

  constructor(
    private _http: HttpService,
  ) {}

  onSubmit(form) {
    this._http.passID(this.user_id)
    .then(obj => {
      console.log(obj);
      this.found_data = obj;
    })
    .catch(err => { this.found_data.code = 1; })
  }
}
