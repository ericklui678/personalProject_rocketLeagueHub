import { CacheService, CacheStoragesEnum } from 'ng2-cache/ng2-cache';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from '../http.service';

declare var BUILD_VERSION: string;

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css'],
  providers: [ CacheService ]
})
export class FollowingComponent implements OnInit {
  found: boolean = false;
  following = [];
  unranked: string = '/assets/images/ranks/unranked.png';

  constructor(
    private _cacheService: CacheService,
    private _cookie: CookieService,
    private _http: HttpService,
  ) { }

  public func() {
    // set global prefix as build version
    this._cacheService.setGlobalPrefix(BUILD_VERSION);
  }

  ngOnInit() {
    this.getFollows();
  }

  unfollow(player) {
    let index = this.following.indexOf(player);
    console.log(index);
    console.log('REMOVED', player);
    
    // update cache to remove specific player after unfollow
    this.following.splice(index, 1);
    this._cacheService.set('follows', this.following);
    console.log('CURRENT FOLLOWS', this.following);
    // delete followed player in database
    this._http.deleteFollow({'email': this._cookie.get('email'), 'id': player.uniqueId})
    .then( obj => {
      console.log('DELETED FROM', obj);
    })
    .catch( err => {
      console.log(err);
    })
  }

  getFollows() {
    let exists: boolean = this._cacheService.exists('follows');
    if (exists) {
      this.following = this._cacheService.get('follows');
      console.log('FROM CACHE', this.following);
      this.found = true;
    } else {
      this._http.getFollows(this._cookie.get('email'))
      .then(obj => {
        console.log('FROM SERVER', obj);
        this.setUserStats(obj);
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  resetStats() {
    return {
      'name': '',
      'uniqueId': '',
      'platform': 0,
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

  setUserStats(players) {
    for (var i = 0; i < players.length; i++) {
      // if found player competed in season 5, set stats
      var stats = this.resetStats();
      if (players[i]['rankedSeasons']['5']) {
        let season5 = players[i]['rankedSeasons']['5'];

        if (season5['10']) {
          var tier_data = this.getTier(season5['10']['tier']);
          stats.solo.tier = tier_data.title;
          stats.solo.icon = tier_data.icon;
          stats.solo.division = this.getDivision(season5['10']['division']);
          stats.solo.matches = season5['10']['matchesPlayed'];
          stats.solo.rating = season5['10']['rankPoints'];
        }

        if (season5['11']) {
          var tier_data = this.getTier(season5['11']['tier']);
          stats.doubles.tier = tier_data.title;
          stats.doubles.icon = tier_data.icon;
          stats.doubles.division = this.getDivision(season5['11']['division']);
          stats.doubles.matches = season5['11']['matchesPlayed'];
          stats.doubles.rating = season5['11']['rankPoints'];
        }

        if (season5['12']) {
          var tier_data = this.getTier(season5['12']['tier']);
          stats.solo_standard.tier = tier_data.title;
          stats.solo_standard.icon = tier_data.icon;
          stats.solo_standard.division = this.getDivision(season5['12']['division']);
          stats.solo_standard.matches = season5['12']['matchesPlayed'];
          stats.solo_standard.rating = season5['12']['rankPoints'];
        }

        if (season5['13']) {
          tier_data = this.getTier(season5['13']['tier']);
          stats.standard.tier = tier_data.title;
          stats.standard.icon = tier_data.icon;
          stats.standard.division = this.getDivision(season5['13']['division']);
          stats.standard.matches = season5['13']['matchesPlayed'];
          stats.standard.rating = season5['13']['rankPoints'];
        }
      }

      stats.name = players[i].displayName;
      stats.uniqueId = players[i].uniqueId;
      stats.platform = players[i].platform.id;
      stats.avatar = players[i].avatar;

      stats.assists = players[i].stats.assists;
      stats.goals = players[i].stats.goals;
      stats.mvps = players[i].stats.mvps;
      stats.saves = players[i].stats.saves;
      stats.shots = players[i].stats.shots;
      stats.wins = players[i].stats.wins;
      
      this.following.push(stats);
    }
    console.log('FOLLOWING', this.following);
    this.found = true;

    // save follows to cache, returns true if successful
    let result: boolean = this._cacheService.set('follows', this.following)
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
