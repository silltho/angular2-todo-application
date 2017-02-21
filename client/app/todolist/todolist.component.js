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
var user_service_1 = require('../user/user.service');
<<<<<<< HEAD
var TodoListComponent = (function () {
    function TodoListComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.userService.loggedInUser.subscribe(function (user) { return _this.todos = user.todos; });
    }
    TodoListComponent = __decorate([
=======
var LoginFormComponent = (function () {
    function LoginFormComponent(userService) {
        this.userService = userService;
        this.blah = "";
    }
    LoginFormComponent.prototype.test = function () {
    };
    LoginFormComponent.prototype.onSubmit = function () {
    };
    LoginFormComponent = __decorate([
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
        core_1.Component({
            moduleId: module.id,
            selector: 'tda-todolist',
            templateUrl: './todolist.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
<<<<<<< HEAD
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;
=======
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
//# sourceMappingURL=todolist.component.js.map