import { Component }    from '@angular/core';

import { UserService }    from '../user/user.service';
import {
    ApiError,
<<<<<<< HEAD
    Todo
=======
    User
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
} from '../shared';

@Component({
    moduleId: module.id,
    selector: 'tda-todolist',
    templateUrl: './todolist.component.html'
})

<<<<<<< HEAD
export class TodoListComponent {
    private todos: Todo[];
    constructor(private userService: UserService) {
        this.userService.loggedInUser.subscribe(user => this.todos = user.todos);
    }
=======
export class LoginFormComponent {
    blah: string = "";
    constructor(private userService: UserService) {}

    test() : void {

    }

    onSubmit() : void {

    }

>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
}
