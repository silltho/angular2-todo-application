"use strict";
var todo_model_1 = require('./todo.model');
var User = (function () {
    function User(userInfo) {
        this.username = userInfo.username;
        this.password = userInfo.password;
        this.firstName = userInfo.firstName;
        this.lastName = userInfo.lastName;
        this.email = userInfo.email;
        this.todos = [];
        this.extractTodos(userInfo);
    }
    User.prototype.extractTodos = function (userInfo) {
        if (userInfo.todos instanceof Array) {
            for (var i = 0; i < userInfo.todos.length; i++) {
                this.todos.push(new todo_model_1.Todo(userInfo.todos[i]));
            }
        }
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.model.js.map