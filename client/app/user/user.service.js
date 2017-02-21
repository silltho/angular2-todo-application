"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
<<<<<<< HEAD
=======
//import { CookieService }    from 'angular2-cookie/core';
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
require('rxjs/add/operator/map');
var index_1 = require('../shared/index');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.loginUrl = './login';
        this.loggedinUrl = './loggedin';
        this.signupUrl = './signup';
        this.logoutUrl = './logout';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this._loggedInUser = new BehaviorSubject_1.BehaviorSubject(new index_1.User({}));
        this.loggedInUser = this._loggedInUser.asObservable();
        this.init();
    }
    UserService.prototype.init = function () {
<<<<<<< HEAD
        this.getLoggedinUser().subscribe();
=======
        this.getLoggedinUser().subscribe(function (res) { return console.log("test"); });
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
    };
    UserService.prototype.login = function (username, password) {
        var _this = this;
        var body = JSON.stringify({ username: username, password: password });
        return this.http.post(this.loginUrl, body, { headers: this.headers })
            .map(function (res) {
            //this.cookieService.remove('connect.sid');
            _this._loggedInUser.next(new index_1.User(res.json()));
        });
    };
    UserService.prototype.getLoggedinUser = function () {
        var _this = this;
        if (!this._loggedInUser.getValue().username) {
            return this.http.get(this.loggedinUrl, { headers: this.headers })
                .map(function (res) { return _this._loggedInUser.next(new index_1.User(res.json())); });
        }
    };
    UserService.prototype.logout = function () {
        var _this = this;
        return this.http.get(this.logoutUrl, { headers: this.headers })
            .map(function (res) {
            _this._loggedInUser.next(new index_1.User({}));
        });
    };
    /*signup(username: string, password: string, firstName: string, lastName: string, email: string): Promise<any> {
         let body = JSON.stringify({
             username: username,
             password: password,
             firstName: firstName,
             lastName: lastName,
             email: email
         });
 
         return this.http.post(this.signupUrl, body, {headers: this.headers})
             .toPromise()
             .catch(this.handleError);
     }*/
    /*getLoggedinUser(): Promise<any> {
        if(this.loggedinUser) {
            return Promise.resolve(this.loggedinUser);
        } else {
            return this.http.get(this.loggedinUrl)
                .toPromise()
                .then(res => {
                    if(res.status == 200) return this.loggedinUser = new User(res.json());
                    return false;
                })
                .catch(err => alert(err));
        }
    }*/
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred (userService)', error); // for demo purposes only
        return Promise.reject(error);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map