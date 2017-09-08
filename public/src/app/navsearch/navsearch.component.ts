import { Component } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-navsearch',
  templateUrl: './navsearch.component.html',
  styleUrls: ['./navsearch.component.css']
})
export class NavsearchComponent{
  platform: [boolean] = [true, false, false]
  user_id: string = ''; // user_id is input from search to be passed to server
  platform_id: string = '1';  // defaults to search steam platform
  found: boolean;
  unranked: string = '/assets/images/ranks/unranked.png';

  stats = {
    'name': '',
    'avatar': '',
    'solo': {
      'tier': 'Unranked',
      'icon': this.unranked,
      'division': 'Division I',
      'matches': 0,
      'rating': 0,
    },
    'doubles': {
      'tier': 'Unranked',
      'icon': this.unranked,
      'division': 'Division I',
      'matches': 0,
      'rating': 0,
    },
    'solo_standard': {
      'tier': 'Unranked',
      'icon': this.unranked,
      'division': 'Division I',
      'matches': 0,
      'rating': 0,
    },
    'standard': {
      'tier': 'Unranked',
      'icon': this.unranked,
      'division': 'Division I',
      'matches': 0,
      'rating': 0,
    },
    'assists': 0,
    'goals': 0,
    'mvps': 0,
    'saves': 0,
    'shots': 0,
    'wins': 0,
  }

  constructor(
    private _http: HttpService,
  ) { }

  onSubmit(form) {
    this._http.passID({ 'uid': this.user_id, 'pid': this.platform_id })
      .then(obj => {
        if (obj.code === 400 || obj.code === 404 || obj.code === 500) {
          this.found = false;
        } else {
          console.log('API DATA', obj);
          this.found = true;
          this.setUserStats(obj);
        }
      })
      .catch(err => {
        console.log('ERROR -->', err);
        ;
      })
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
    // if found player competed in season 5, set stats
    if (obj['rankedSeasons']['5']) {
      let season5 = obj['rankedSeasons']['5'];

      if (season5['10']) {
        var tier_data = this.getTier(season5['10']['tier']);
        this.stats.solo.tier = tier_data.title;
        this.stats.solo.icon = tier_data.icon;
        this.stats.solo.division = this.getDivision(season5['10']['division']);
        this.stats.solo.matches = season5['10']['matchesPlayed'];
        this.stats.solo.rating = season5['10']['rankPoints'];
      }

      if (season5['11']) {
        var tier_data = this.getTier(season5['11']['tier']);
        this.stats.doubles.tier = tier_data.title;
        this.stats.doubles.icon = tier_data.icon;
        this.stats.doubles.division = this.getDivision(season5['11']['division']);
        this.stats.doubles.matches = season5['11']['matchesPlayed'];
        this.stats.doubles.rating = season5['11']['rankPoints'];
      }

      if (season5['12']) {
        var tier_data = this.getTier(season5['12']['tier']);
        this.stats.solo_standard.tier = tier_data.title;
        this.stats.solo_standard.icon = tier_data.icon;
        this.stats.solo_standard.division = this.getDivision(season5['12']['division']);
        this.stats.solo_standard.matches = season5['12']['matchesPlayed'];
        this.stats.solo_standard.rating = season5['12']['rankPoints'];
      }

      if (season5['13']) {
        tier_data = this.getTier(season5['13']['tier']);
        this.stats.standard.tier = tier_data.title;
        this.stats.standard.icon = tier_data.icon;
        this.stats.standard.division = this.getDivision(season5['13']['division']);
        this.stats.standard.matches = season5['13']['matchesPlayed'];
        this.stats.standard.rating = season5['13']['rankPoints'];
      }
    } else { // else reset stats if player did not compete in season 5
      this.stats = {
        'name': '',
        'avatar': '',
        'solo': {
          'tier': 'Unranked',
          'icon': this.unranked,
          'division': 'Division I',
          'matches': 0,
          'rating': 0,
        },
        'doubles': {
          'tier': 'Unranked',
          'icon': this.unranked,
          'division': 'Division I',
          'matches': 0,
          'rating': 0,
        },
        'solo_standard': {
          'tier': 'Unranked',
          'icon': this.unranked,
          'division': 'Division I',
          'matches': 0,
          'rating': 0,
        },
        'standard': {
          'tier': 'Unranked',
          'icon': this.unranked,
          'division': 'Division I',
          'matches': 0,
          'rating': 0,
        },
        'assists': 0,
        'goals': 0,
        'mvps': 0,
        'saves': 0,
        'shots': 0,
        'wins': 0,
      }
    }

    this.stats.name = obj.displayName;
    this.stats.avatar = obj.avatar;

    this.stats.assists = obj.stats.assists;
    this.stats.goals = obj.stats.goals;
    this.stats.mvps = obj.stats.mvps;
    this.stats.saves = obj.stats.saves;
    this.stats.shots = obj.stats.shots;
    this.stats.wins = obj.stats.wins;
    console.log('FOUND STATS', this.stats)
  }

  getTier(key) {
    let assets = '/assets/images/ranks/';
    let dict = {
      '0': { 'title': 'Unranked', 'icon': assets + 'unranked.png' },
      '1': { 'title': 'Bronze I', 'icon': assets + 'b1.png' },
      '2': { 'title': 'Bronze II', 'icon': assets + 'b2.png' },
      '3': { 'title': 'Bronze III', 'icon': assets + 'b3.png' },
      '4': { 'title': 'Silver I', 'icon': assets + 's1.png' },
      '5': { 'title': 'Silver II', 'icon': assets + 's2.png' },
      '6': { 'title': 'Silver III', 'icon': assets + 's3.png' },
      '7': { 'title': 'Gold I', 'icon': assets + 'g1.png' },
      '8': { 'title': 'Gold II', 'icon': assets + 'g2.png' },
      '9': { 'title': 'Gold III', 'icon': assets + 'g3.png' },
      '10': { 'title': 'Platinum I', 'icon': assets + 'p1.png' },
      '11': { 'title': 'Platinum II', 'icon': assets + 'p2.png' },
      '12': { 'title': 'Platinum III', 'icon': assets + 'p3.png' },
      '13': { 'title': 'Diamond I', 'icon': assets + 'd1.png' },
      '14': { 'title': 'Diamond II', 'icon': assets + 'd2.png' },
      '15': { 'title': 'Diamond III', 'icon': assets + 'd3.png' },
      '16': { 'title': 'Champion I', 'icon': assets + 'c1.png' },
      '17': { 'title': 'Champion II', 'icon': assets + 'c2.png' },
      '18': { 'title': 'Champion III', 'icon': assets + 'c3.png' },
      '19': { 'title': 'Grand Chamption', 'icon': assets + 'gc.png' },
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
