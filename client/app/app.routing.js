"use strict";
var router_1 = require('@angular/router');
var start_component_1 = require('./start/start.component');
var todolist_component_1 = require('./todolist/todolist.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
    },
    {
        path: 'start',
        component: start_component_1.StartComponent
    },
    {
        path: 'todos',
        component: todolist_component_1.TodoListComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map