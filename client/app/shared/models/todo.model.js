"use strict";
var Todo = (function () {
    function Todo(todoInfo) {
        this._id = todoInfo._id;
        this.description = todoInfo.description;
        this.done = todoInfo.done;
        this.editing = todoInfo.editing;
    }
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.model.js.map