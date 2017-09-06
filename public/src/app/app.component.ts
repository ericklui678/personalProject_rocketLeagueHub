import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  platform: [boolean] = [true, false, false]
  user_id: string = '';
  platform_id: string = '1';
  found_data = {
    'uniqueId': 0,
    'code': 0
  };

  constructor(
    private _http: HttpService,
  ) {}

  onSubmit(form) {
    this._http.passID({'uid': this.user_id, 'pid': this.platform_id})
    .then(obj => {
      console.log(obj);
      this.found_data = obj;
    })
    .catch(err => { this.found_data.code = 1; })
  }

  setPlatform(num) {
    if (num === 0) {
      this.platform = [true, false, false];
      this.platform_id = '1';
    } else if (num === 1) {
      this.platform = [false, true, false];
      this.platform_id = '2';
    } else {
      this.platform = [false, false, true]
      this.platform_id = '3';
    }
  }
}
