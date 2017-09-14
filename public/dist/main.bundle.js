webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__following_following_component__ = __webpack_require__("../../../../../src/app/following/following.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navsearch_navsearch_component__ = __webpack_require__("../../../../../src/app/navsearch/navsearch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// remember to import components



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__navsearch_navsearch_component__["a" /* NavsearchComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] },
    { path: 'following', component: __WEBPACK_IMPORTED_MODULE_2__following_following_component__["a" /* FollowingComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"white-border\">\n  <!-- APP-COMPONENT -->\n  <nav class=\"navbar navbar-expand-md navbar-dark black-opacity\">\n    <a [routerLink]=\"['/']\" class=\"navbar-brand\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> RLHub</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <div *ngIf=\"username\">\n          <li class=\"nav-item\">\n            <a [routerLink]=\"['/following']\" class=\"nav-link\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i> Following</a>\n          </li>\n        </div>\n      </ul>\n      <div *ngIf=\"username; else login\">\n        <h5 class=\"d-inline mr-2\">{{ username }}</h5>\n        <button (click)=\"logout()\" class=\"btn btn-outline-primary my-2 my-sm-0 mr-2\">\n          <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>Logout\n        </button>\n      </div>\n      <ng-template #login>\n        <form (submit)=\"logon(formData)\" #formData=\"ngForm\" class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"text\" name=\"email\" placeholder=\"Email\"\n          [(ngModel)]=\"user.email\"\n          #email=\"ngModel\"\n          required\n          pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\">\n          <input class=\"form-control mr-sm-2\" type=\"password\" name=\"password\" placeholder=\"Password\"\n          [(ngModel)]=\"user.password\"\n          #password=\"ngModel\"\n          required\n          minlength=\"8\">\n          <button class=\"btn btn-outline-primary my-2 my-sm-0 mr-2\"\n            type=\"submit\"\n            [disabled]=\"!formData.valid\">\n            <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Login\n          </button>\n        </form>\n        <button (click)=\"register()\" class=\"btn btn-outline-success my-2 my-sm-0\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> Sign Up?</button>\n      </ng-template>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_cache_ng2_cache__ = __webpack_require__("../../../../ng2-cache/ng2-cache.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__username_service__ = __webpack_require__("../../../../../src/app/username.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(_cacheService, _cookie, _http, _nameService, _router) {
        var _this = this;
        this._cacheService = _cacheService;
        this._cookie = _cookie;
        this._http = _http;
        this._nameService = _nameService;
        this._router = _router;
        this.username = this._cookie.get('username');
        this.user = {
            'email': '',
            'password': '',
        };
        this.subscription = this._nameService.getName().subscribe(function (name) { _this.username = name; });
    }
    AppComponent.prototype.func = function () {
        // set global prefix as build version
        this._cacheService.setGlobalPrefix(BUILD_VERSION);
    };
    AppComponent.prototype.register = function () {
        this._router.navigate(['register']);
    };
    AppComponent.prototype.logon = function (form) {
        var _this = this;
        this.user.email = this.user.email.toLowerCase();
        this._http.loginUser(this.user)
            .then(function (obj) {
            if (obj.err) {
                console.log('ERRORS', obj.err);
            }
            else {
                _this._cookie.set('username', obj.username);
                _this._cookie.set('email', obj.email);
                _this._nameService.setName(obj.username);
                _this._router.navigate(['']);
            }
        })
            .catch(function (err) {
            console.log('ERROR ->', err);
        });
    };
    AppComponent.prototype.logout = function () {
        this._cookie.deleteAll();
        this._nameService.clearName();
        this._cacheService.removeAll();
        this._router.navigate(['']);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0_ng2_cache_ng2_cache__["a" /* CacheService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ng2_cache_ng2_cache__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ng2_cache_ng2_cache__["a" /* CacheService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__username_service__["a" /* UsernameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__username_service__["a" /* UsernameService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navsearch_navsearch_component__ = __webpack_require__("../../../../../src/app/navsearch/navsearch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__username_service__ = __webpack_require__("../../../../../src/app/username.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__following_following_component__ = __webpack_require__("../../../../../src/app/following/following.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__navsearch_navsearch_component__["a" /* NavsearchComponent */],
            __WEBPACK_IMPORTED_MODULE_11__following_following_component__["a" /* FollowingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_10__username_service__["a" /* UsernameService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/following/following.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/following/following.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"white-border text-white\">\n  <!-- FOLLOWING-COMPONENT -->\n  <div *ngIf=\"found\" class=\"container mt-5\">\n    <div *ngFor=\"let player of following\">\n      <div class=\"container mt-2 black-opacity mb-5\">\n        <div class=\"row p-3\">\n          <div class=\"col col-name\">\n            <h3>{{ player.name }}</h3>\n          </div>\n          <div class=\"col text-right\">\n            <button (click)=\"unfollow(player)\" class=\"btn btn-danger\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i> Unfollow</button>\n          </div>\n        </div>\n        <div class=\"row p-3\">\n          <div class=\"col-sm col-12 avatar\">\n            <img class=\"img-fluid d-block avatar\" src=\"{{ player.avatar }}\" alt=\"No Avatar\">\n          </div>\n          <div class=\"col-sm col-6 text-center\">\n            <h5>Solo</h5>\n            <span class=\"d-block\">{{ player.solo.tier }}</span>\n            <img class=\"img-fluid\" src=\"{{ player.solo.icon }}\">\n            <span class=\"d-block\">{{ player.solo.division }} </span>\n            <span class=\"d-block\">{{ player.solo.rating }} MMR</span>\n            <span class=\"d-block\">{{ player.solo.matches }} matches</span>\n          </div>\n          <div class=\"col-sm col-6 text-center\">\n            <h5>Doubles</h5>\n            <span class=\"d-block\">{{ player.doubles.tier }}</span>\n            <img class=\"img-fluid\" src=\"{{ player.doubles.icon }}\">\n            <span class=\"d-block\">{{ player.doubles.division }} </span>\n            <span class=\"d-block\">{{ player.doubles.rating }} MMR</span>\n            <span class=\"d-block\">{{ player.doubles.matches }} matches</span>\n          </div>\n          <div class=\"col-sm col-6 text-center\">\n            <h5>Solo Standard</h5>\n            <span class=\"d-block\">{{ player.solo_standard.tier }}</span>\n            <img class=\"img-fluid\" src=\"{{ player.solo_standard.icon }}\">\n            <span class=\"d-block\">{{ player.solo_standard.division }} </span>\n            <span class=\"d-block\">{{ player.solo_standard.rating }} MMR</span>\n            <span class=\"d-block\">{{ player.solo_standard.matches }} matches</span>\n          </div>\n          <div class=\"col-sm col-6 text-center\">\n            <h5>Standard</h5>\n            <span class=\"d-block\">{{ player.standard.tier }}</span>\n            <img class=\"img-fluid\" src=\"{{ player.standard.icon }}\">\n            <span class=\"d-block\">{{ player.standard.division }} </span>\n            <span class=\"d-block\">{{ player.standard.rating }} MMR</span>\n            <span class=\"d-block\">{{ player.standard.matches }} matches</span>\n          </div>\n        </div>\n        <div class=\"row p-3\">\n          <div class=\"col-sm col-4 text-center\">\n            <img class=\"img-fluid\" src=\"/assets/images/stats/wins.png\">\n            <span class=\"d-block\">{{ player.wins }} Wins</span>\n          </div>\n          <div class=\"col-sm col-4 text-center\">\n            <img class=\"img-fluid\" src=\"/assets/images/stats/goals.png\">\n            <span class=\"d-block\">{{ player.goals }} Goals</span>\n          </div>\n          <div class=\"col-sm col-4 text-center\">\n            <img class=\"img-fluid\" src=\"/assets/images/stats/mvps.png\">\n            <span class=\"d-block\">{{ player.mvps }} MVPs</span>\n          </div>\n          <div class=\"col-sm col-4 text-center\">\n            <img class=\"img-fluid\" src=\"/assets/images/stats/saves.png\">\n            <span class=\"d-block\">{{ player.saves }} Saves</span>\n          </div>\n          <div class=\"col-sm col-4 text-center\">\n            <img class=\"img-fluid\" src=\"/assets/images/stats/shots.png\">\n            <span class=\"d-block\">{{ player.shots }} Shots</span>\n          </div>\n          <div class=\"col-sm col-4 text-center\">\n            <img class=\"img-fluid\" src=\"/assets/images/stats/assists.png\">\n            <span class=\"d-block\">{{ player.assists }} Assists</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/following/following.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_cache_ng2_cache__ = __webpack_require__("../../../../ng2-cache/ng2-cache.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FollowingComponent = (function () {
    function FollowingComponent(_cacheService, _cookie, _http) {
        this._cacheService = _cacheService;
        this._cookie = _cookie;
        this._http = _http;
        this.found = false;
        this.following = [];
        this.unranked = '/assets/images/ranks/unranked.png';
    }
    FollowingComponent.prototype.func = function () {
        // set global prefix as build version
        this._cacheService.setGlobalPrefix(BUILD_VERSION);
    };
    FollowingComponent.prototype.ngOnInit = function () {
        this.getFollows();
    };
    FollowingComponent.prototype.unfollow = function (player) {
        var index = this.following.indexOf(player);
        console.log(index);
        console.log('REMOVED', player);
        // update cache to remove specific player after unfollow
        this.following.splice(index, 1);
        this._cacheService.set('follows', this.following);
        console.log('CURRENT FOLLOWS', this.following);
        // delete followed player in database
        this._http.deleteFollow({ 'email': this._cookie.get('email'), 'id': player.uniqueId })
            .then(function (obj) {
            console.log('DELETED FROM', obj);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    FollowingComponent.prototype.getFollows = function () {
        var _this = this;
        var exists = this._cacheService.exists('follows');
        if (exists) {
            this.following = this._cacheService.get('follows');
            console.log('FROM CACHE', this.following);
            this.found = true;
        }
        else {
            this._http.getFollows(this._cookie.get('email'))
                .then(function (obj) {
                console.log('FROM SERVER', obj);
                _this.setUserStats(obj);
            })
                .catch(function (err) {
                console.log(err);
            });
        }
    };
    FollowingComponent.prototype.resetStats = function () {
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
        };
    };
    FollowingComponent.prototype.setUserStats = function (players) {
        for (var i = 0; i < players.length; i++) {
            // if found player competed in season 5, set stats
            var stats = this.resetStats();
            if (players[i]['rankedSeasons']['5']) {
                var season5 = players[i]['rankedSeasons']['5'];
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
        var result = this._cacheService.set('follows', this.following);
    };
    FollowingComponent.prototype.getTier = function (key) {
        var assets = '/assets/images/ranks/';
        var dict = {
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
        };
        return dict[key];
    };
    FollowingComponent.prototype.getDivision = function (key) {
        var dict = {
            '0': 'Division I',
            '1': 'Division II',
            '2': 'Division III',
            '3': 'Division IV',
        };
        return dict[key];
    };
    return FollowingComponent;
}());
FollowingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-following',
        template: __webpack_require__("../../../../../src/app/following/following.component.html"),
        styles: [__webpack_require__("../../../../../src/app/following/following.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0_ng2_cache_ng2_cache__["a" /* CacheService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ng2_cache_ng2_cache__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ng2_cache_ng2_cache__["a" /* CacheService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _c || Object])
], FollowingComponent);

var _a, _b, _c;
//# sourceMappingURL=following.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.passID = function (obj) {
        return this._http.get('/player/' + obj.uid + '/' + obj.pid)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.registerUser = function (obj) {
        return this._http.post('/user/create', obj)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.loginUser = function (obj) {
        return this._http.post('/user/login', obj)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.addFollow = function (obj) {
        return this._http.post('/user/follow', obj)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.getFollows = function (email) {
        return this._http.get(email + '/following')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.deleteFollow = function (obj) {
        return this._http.post('/user/unfollow/', obj)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/navsearch/navsearch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navsearch/navsearch.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"white-border text-white\">\n  <!-- NAVSEARCH-COMPONENT -->\n  <div class=\"container mt-5\">\n    <form (submit)=\"onSubmit(formData)\" #formData=\"ngForm\">\n      <div class=\"row\">\n        <img class=\"icons img-thumbnail\" src=\"/assets/images/steam.png\" alt=\"steam icon\" [ngClass]=\"{ 'op-none': platform[0], 'op-3': !platform[0] }\"\n          (click)=\"setPlatform(0)\">\n        <img class=\"icons img-thumbnail\" src=\"/assets/images/playstation.png\" alt=\"playstation icon\" [ngClass]=\"{ 'op-none': platform[1], 'bg-blue': platform[1], 'op-3': !platform[1] }\"\n          (click)=\"setPlatform(1)\">\n        <img class=\"icons img-thumbnail\" src=\"/assets/images/xbox.png\" alt=\"xbox icon\" [ngClass]=\"{ 'op-none': platform[2], 'bg-green': platform[2], 'op-3': !platform[2] }\"\n          (click)=\"setPlatform(2)\">\n        <div class=\"col rm-pad\">\n          <input class=\"form-control px-40\" type=\"text\" placeholder=\"Enter Steam Community ID, PSN, or Xbox gamer tags\" name=\"id\" [(ngModel)]=\"user_id\">\n        </div>\n        <button class=\"btn btn-primary\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i> Search</button>\n      </div>\n    </form>\n    <div class=\"row mt-2\">\n      <div *ngIf=\"found === false\" class=\"error col bg-danger text-white pt-2\">\n        <span>Error {{ error.code }} - {{ error.msg }}</span>\n      </div>\n    </div>\n  </div>\n  <!-- container mt-5 -->\n\n  <div *ngIf=\"found\" class=\"container mt-2 black-opacity\">\n    <div class=\"row p-3 white-border-bottom\">\n      <div class=\"col col-name\">\n        <h3>{{ stats.name }}</h3>\n      </div>\n      <div class=\"col text-right\">\n        <div *ngIf=\"username; else disabled\">\n          <button (click)=\"followButtonClicked()\" class=\"btn btn-success\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Follow\n          </button>\n        </div>\n        <ng-template #disabled>\n          <button class=\"btn btn-success\" disabled>\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Log in to follow!\n          </button>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"row p-3 white-border-bottom\">\n      <div class=\"col-sm col-12 avatar\">\n        <img class=\"img-fluid d-block avatar\" src=\"{{ stats.avatar }}\" alt=\"No Avatar\">\n      </div>\n      <div class=\"col-sm col-6 text-center\">\n        <h5>Solo</h5>\n        <span class=\"d-block\">{{ stats.solo.tier }}</span>\n        <img class=\"img-fluid\" src=\"{{ stats.solo.icon }}\">\n        <span class=\"d-block\">{{ stats.solo.division }} </span>\n        <span class=\"d-block\">{{ stats.solo.rating }} MMR</span>\n        <span class=\"d-block\">{{ stats.solo.matches }} matches</span>\n      </div>\n      <div class=\"col-sm col-6 text-center\">\n        <h5>Doubles</h5>\n        <span class=\"d-block\">{{ stats.doubles.tier }}</span>\n        <img class=\"img-fluid\" src=\"{{ stats.doubles.icon }}\">\n        <span class=\"d-block\">{{ stats.doubles.division }} </span>\n        <span class=\"d-block\">{{ stats.doubles.rating }} MMR</span>\n        <span class=\"d-block\">{{ stats.doubles.matches }} matches</span>\n      </div>\n      <div class=\"col-sm col-6 text-center\">\n        <h5>Solo Standard</h5>\n        <span class=\"d-block\">{{ stats.solo_standard.tier }}</span>\n        <img class=\"img-fluid\" src=\"{{ stats.solo_standard.icon }}\">\n        <span class=\"d-block\">{{ stats.solo_standard.division }} </span>\n        <span class=\"d-block\">{{ stats.solo_standard.rating }} MMR</span>\n        <span class=\"d-block\">{{ stats.solo_standard.matches }} matches</span>\n      </div>\n      <div class=\"col-sm col-6 text-center\">\n        <h5>Standard</h5>\n        <span class=\"d-block\">{{ stats.standard.tier }}</span>\n        <img class=\"img-fluid\" src=\"{{ stats.standard.icon }}\">\n        <span class=\"d-block\">{{ stats.standard.division }} </span>\n        <span class=\"d-block\">{{ stats.standard.rating }} MMR</span>\n        <span class=\"d-block\">{{ stats.standard.matches }} matches</span>\n      </div>\n    </div>\n    <div class=\"row p-3\">\n      <div class=\"col-sm col-4 text-center\">\n        <img class=\"img-fluid\" src=\"/assets/images/stats/wins.png\">\n        <span class=\"d-block\">{{ stats.wins }} Wins</span>\n      </div>\n      <div class=\"col-sm col-4 text-center\">\n        <img class=\"img-fluid\" src=\"/assets/images/stats/goals.png\">\n        <span class=\"d-block\">{{ stats.goals }} Goals</span>\n      </div>\n      <div class=\"col-sm col-4 text-center\">\n        <img class=\"img-fluid\" src=\"/assets/images/stats/mvps.png\">\n        <span class=\"d-block\">{{ stats.mvps }} MVPs</span>\n      </div>\n      <div class=\"col-sm col-4 text-center\">\n        <img class=\"img-fluid\" src=\"/assets/images/stats/saves.png\">\n        <span class=\"d-block\">{{ stats.saves }} Saves</span>\n      </div>\n      <div class=\"col-sm col-4 text-center\">\n        <img class=\"img-fluid\" src=\"/assets/images/stats/shots.png\">\n        <span class=\"d-block\">{{ stats.shots }} Shots</span>\n      </div>\n      <div class=\"col-sm col-4 text-center\">\n        <img class=\"img-fluid\" src=\"/assets/images/stats/assists.png\">\n        <span class=\"d-block\">{{ stats.assists }} Assists</span>\n      </div>\n    </div> <!-- row -->\n  </div> <!-- container -->\n</div> <!-- navsearch-component -->\n"

/***/ }),

/***/ "../../../../../src/app/navsearch/navsearch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavsearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_cache_ng2_cache__ = __webpack_require__("../../../../ng2-cache/ng2-cache.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__username_service__ = __webpack_require__("../../../../../src/app/username.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavsearchComponent = (function () {
    function NavsearchComponent(_cacheService, _cookie, _http, _nameService) {
        var _this = this;
        this._cacheService = _cacheService;
        this._cookie = _cookie;
        this._http = _http;
        this._nameService = _nameService;
        this.platform = [true, false, false]; // switch for toggling platforms
        this.user_id = ''; // user_id is input from search to be passed to server
        this.username = this._cookie.get('username');
        this.platform_id = '1'; // defaults to search steam platform
        this.unranked = '/assets/images/ranks/unranked.png';
        this.error = {
            'code': 0,
            'msg': '',
        };
        this.stats = {
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
        };
        this.subscription = this._nameService.getName().subscribe(function (name) { _this.username = name; });
    }
    NavsearchComponent.prototype.func = function () {
        // set global prefix as build version
        this._cacheService.setGlobalPrefix(BUILD_VERSION);
    };
    NavsearchComponent.prototype.followButtonClicked = function () {
        var follow = {
            'email': this._cookie.get('email'),
            'uniqueId': this.stats.uniqueId,
            'platform': this.stats.platform.toString(),
        };
        var exists = this._cacheService.exists('follows');
        if (exists) {
            // check if it's already in cache
            var following = this._cacheService.get('follows');
            for (var i = 0; i < following.length; i++) {
                if (follow.uniqueId === following[i].uniqueId) {
                    console.log('You are already following this player');
                    return;
                }
            }
            following.push(this.stats);
            this._cacheService.set('follows', following);
            console.log('AFTER HITTING FOLLOW', this._cacheService.get('follows'));
        }
        // add to database
        this._http.addFollow(follow)
            .then(function (obj) {
            console.log(obj);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    NavsearchComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log('Search clicked');
        this._http.passID({ 'uid': this.user_id, 'pid': this.platform_id })
            .then(function (obj) {
            if (obj.code === 200) {
                console.log('API DATA', obj);
                _this.found = true;
                _this.setUserStats(obj);
            }
            else {
                _this.found = false;
                _this.error.code = obj.code;
                if (obj.code === 404) {
                    _this.error.msg = "Sorry, we can't find specified player";
                }
                else if (obj.code === 500 || obj.code === 503) {
                    _this.error.msg = "Rocket League API server is currently under maintenance. Please check again later";
                }
            }
        })
            .catch(function (err) {
            console.log('ERROR -->', err);
        });
    };
    NavsearchComponent.prototype.setPlatform = function (num) {
        if (num === 0) {
            this.platform = [true, false, false];
            this.platform_id = '1';
        }
        else if (num === 1) {
            this.platform = [false, true, false];
            this.platform_id = '2';
        }
        else {
            this.platform = [false, false, true];
            this.platform_id = '3';
        }
    };
    NavsearchComponent.prototype.setUserStats = function (obj) {
        // if found player competed in season 5, set stats
        if (obj['rankedSeasons']['5']) {
            var season5 = obj['rankedSeasons']['5'];
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
        }
        else {
            this.stats = {
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
            };
        }
        this.stats.name = obj.displayName;
        this.stats.uniqueId = obj.uniqueId;
        this.stats.platform = obj.platform.id;
        this.stats.avatar = obj.avatar;
        this.stats.assists = obj.stats.assists;
        this.stats.goals = obj.stats.goals;
        this.stats.mvps = obj.stats.mvps;
        this.stats.saves = obj.stats.saves;
        this.stats.shots = obj.stats.shots;
        this.stats.wins = obj.stats.wins;
        console.log('FOUND STATS', this.stats);
    };
    NavsearchComponent.prototype.getTier = function (key) {
        var assets = '/assets/images/ranks/';
        var dict = {
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
        };
        return dict[key];
    };
    NavsearchComponent.prototype.getDivision = function (key) {
        var dict = {
            '0': 'Division I',
            '1': 'Division II',
            '2': 'Division III',
            '3': 'Division IV',
        };
        return dict[key];
    };
    NavsearchComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return NavsearchComponent;
}());
NavsearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-navsearch',
        template: __webpack_require__("../../../../../src/app/navsearch/navsearch.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navsearch/navsearch.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0_ng2_cache_ng2_cache__["a" /* CacheService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ng2_cache_ng2_cache__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ng2_cache_ng2_cache__["a" /* CacheService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__username_service__["a" /* UsernameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__username_service__["a" /* UsernameService */]) === "function" && _d || Object])
], NavsearchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navsearch.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"white-border register-component\">\n  REGISTER-COMPONENT\n  <div class=\"container w-50 black-opacity py-3\">\n    <h3 class=\"text-center mb-3\">Register</h3>\n    <form (submit)=\"onSubmit(formData)\" id=\"needs-validation\" #formData=\"ngForm\" novalidate>\n      <div class=\"form-group col-lg-6 col mx-auto\">\n        <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\"\n        [(ngModel)]=user.username\n        #username=\"ngModel\"\n        required\n        maxlength=\"25\">\n        <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"bg-danger rounded p-1\">\n          <div *ngIf=\"username.errors.required\">Username is required</div>\n        </div>\n      </div>\n      <div class=\"form-group col-lg-6 col mx-auto\">\n        <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\"\n        [(ngModel)]=user.email\n        #email=\"ngModel\"\n        required\n        pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\">\n        <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"bg-danger rounded p-1\">\n          <div *ngIf=\"email.errors.required\">Email is required</div>\n          <div *ngIf=\"email.errors.pattern\">Email is invalid format</div>\n        </div>\n        <div *ngIf=\"email_exists\" class=\"bg-danger rounded p-1\">Email already exists, please enter a new email</div>\n      </div>\n      <div class=\"form-group col-lg-6 col mx-auto\">\n        <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\"\n        [(ngModel)]=\"user.password\"\n        #password=\"ngModel\"\n        required\n        minlength=\"8\"\n        >\n        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"bg-danger rounded p-1\">\n          <div *ngIf=password.errors.required>Password is required</div>\n          <div *ngIf=\"password.errors.minlength\">Password must be at least 8 characters</div>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\">\n        <button type=\"submit\" [disabled]=\"!formData.valid\" class=\"btn btn-primary\">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__username_service__ = __webpack_require__("../../../../../src/app/username.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(_cookie, _http, _nameService, _router) {
        this._cookie = _cookie;
        this._http = _http;
        this._nameService = _nameService;
        this._router = _router;
        this.user = {
            'username': '',
            'email': '',
            'password': '',
            'following': [],
        };
        this.email_exists = false;
    }
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.user.email = this.user.email.toLowerCase();
        this._http.registerUser(this.user)
            .then(function (obj) {
            console.log('RECEIVED FROM SERVER', obj);
            if (obj.err) {
                _this.email_exists = true;
            }
            else {
                _this._cookie.set('username', obj.username);
                _this._cookie.set('email', obj.email);
                _this._nameService.setName(obj.username);
                _this._router.navigate(['']);
            }
        })
            .catch(function (err) {
            console.log('ERROR ->', err);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__username_service__["a" /* UsernameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__username_service__["a" /* UsernameService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/username.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UsernameService = (function () {
    function UsernameService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    UsernameService.prototype.setName = function (name) {
        this.subject.next(name);
    };
    UsernameService.prototype.getName = function () {
        return this.subject.asObservable();
    };
    UsernameService.prototype.clearName = function () {
        this.subject.next();
    };
    return UsernameService;
}());
UsernameService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], UsernameService);

//# sourceMappingURL=username.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map