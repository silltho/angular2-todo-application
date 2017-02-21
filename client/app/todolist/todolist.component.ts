import { Component }    from '@angular/core';

import { UserService }    from '../user/user.service';
import {
    ApiError,
    Todo
} from '../shared';

@Component({
    moduleId: module.id,
    selector: 'tda-todolist',
    templateUrl: './todolist.component.html'
})

export class TodoListComponent {
    private todos: Todo[];
    constructor(private userService: UserService) {
        this.userService.loggedInUser.subscribe(user => this.todos = user.todos);
    }
}
