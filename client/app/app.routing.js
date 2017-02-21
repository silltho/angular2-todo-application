"use strict";
var router_1 = require('@angular/router');
var start_component_1 = require('./start/start.component');
<<<<<<< HEAD
var todolist_component_1 = require('./todolist/todolist.component');
=======
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
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
<<<<<<< HEAD
        path: 'todos',
        component: todolist_component_1.TodoListComponent
=======
        path: 'test',
        component: start_component_1.StartComponent
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map