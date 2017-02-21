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
<<<<<<< HEAD
var user_service_1 = require('../user.service');
var LoginFormComponent = (function () {
    function LoginFormComponent(userService) {
        this.userService = userService;
=======
var router_1 = require('@angular/router');
var user_service_1 = require('../user.service');
var LoginFormComponent = (function () {
    function LoginFormComponent(userService, router) {
        this.userService = userService;
        this.router = router;
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
        this.err = null;
        this.username = '';
        this.password = '';
    }
    LoginFormComponent.prototype.onSubmit = function () {
<<<<<<< HEAD
        this.userService.login(this.username, this.password).subscribe(null, //TODO weiterleiten
=======
        this.userService.login(this.username, this.password).subscribe(function () {
            console.log("test1");
            this.router.navigate('test123');
        }, //TODO weiterleiten
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
        null //err => this.err = err.json()
        );
    };
    LoginFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tda-user-login',
            templateUrl: './login-form.component.html'
        }), 
<<<<<<< HEAD
        __metadata('design:paramtypes', [user_service_1.UserService])
=======
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=login-form.component.js.map