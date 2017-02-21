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
var user_service_1 = require('../user.service');
<<<<<<< HEAD
var router_1 = require('@angular/router');
var PanelComponent = (function () {
    function PanelComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.userService.loggedInUser.subscribe(function (user) {
            _this.user = user;
            _this.user = user;
            _this.router.navigate(['todos']);
        }, function (error) {
            _this.router.navigate(['start']);
        });
    }
    PanelComponent.prototype.logoutUser = function () {
        var _this = this;
        this.userService.logout().subscribe(function (res) { return _this.router.navigate(['start']); }, function (err) { return console.log("logouterror"); });
=======
var PanelComponent = (function () {
    function PanelComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.userService.loggedInUser.subscribe(function (user) { return _this.user = user; });
    }
    PanelComponent.prototype.logoutUser = function () {
        this.userService.logout().subscribe(function (res) { return console.log("logoutsuccess"); }, function (err) { return console.log("logouterror"); });
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
    };
    PanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tda-user-panel',
            templateUrl: './panel.component.html',
            styleUrls: ['./panel.component.css']
        }), 
<<<<<<< HEAD
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
=======
        __metadata('design:paramtypes', [user_service_1.UserService])
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
    ], PanelComponent);
    return PanelComponent;
}());
exports.PanelComponent = PanelComponent;
//# sourceMappingURL=panel.component.js.map