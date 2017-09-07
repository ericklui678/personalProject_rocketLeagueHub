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
  stats = {
    'name': '',
    'avatar': '',
    'solo': {
      'tier': '',
      'division': '',
      'matches': '',
      'rating': 0,
    },
    'doubles': {
      'tier': '',
      'division': '',
      'matches': '',
      'rating': 0,
    },
    'solo_standard': {
      'tier': '',
      'division': '',
      'matches': '',
      'rating': 0,
    },
    'standard': {
      'tier': '',
      'division': '',
      'matches': '',
      'rating': 0,
    },
  }

  found_data = {
    'signatureUrl': 0,
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
      this.setUserStats(obj);
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
      this.platform = [false, false, true];
      this.platform_id = '3';
    }
  }

  setUserStats(obj) {
    let season5 = obj['rankedSeasons']['5'];

    this.stats.name = obj.displayName;
    this.stats.avatar = obj.avatar;
    
    this.stats.solo.tier = this.getTier(season5['10']['tier']);
    this.stats.solo.division = this.getDivision(season5['10']['division']);
    this.stats.solo.matches = season5['10']['matchesPlayed'];
    this.stats.solo.rating = season5['10']['rankPoints'];

    this.stats.doubles.tier = this.getTier(season5['11']['tier']);
    this.stats.doubles.division = this.getDivision(season5['11']['division']);
    this.stats.doubles.matches = season5['11']['matchesPlayed'];
    this.stats.doubles.rating = season5['11']['rankPoints'];

    this.stats.solo_standard.tier = this.getTier(season5['12']['tier']);
    this.stats.solo_standard.division = this.getDivision(season5['12']['division']);
    this.stats.solo_standard.matches = season5['12']['matchesPlayed'];
    this.stats.solo_standard.rating = season5['12']['rankPoints'];

    this.stats.standard.tier = this.getTier(season5['13']['tier']);
    this.stats.standard.division = this.getDivision(season5['13']['division']);
    this.stats.standard.matches = season5['13']['matchesPlayed'];
    this.stats.standard.rating = season5['13']['rankPoints'];

    console.log(this.stats);
  }

  getTier(key) {
    let dict = {
      '0': 'Unranked',
      '1': 'Bronze I',
      '2': 'Bronze II',
      '3': 'Bronze III',
      '4': 'Silver I',
      '5': 'Silver II',
      '6': 'Silver III',
      '7': 'Gold I',
      '8': 'Gold II',
      '9': 'Gold III',
      '10': 'Platinum I',
      '11': 'Platinum II',
      '12': 'Platinum III',
      '13': 'Diamond I',
      '14': 'Diamond II',
      '15': 'Diamond III',
      '16': 'Champion I',
      '17': 'Champion II',
      '18': 'Champion III',
      '19': 'Grand Champion'
    }
    return dict[key];
  }

  getDivision(key) {
    let dict = {
      '0': 'Division I',
      '1': 'Division II',
      '2': 'Division III',
      '3': 'Division IV',
    }
    return dict[key];
  }
}
