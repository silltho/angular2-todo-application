import { Component }    from '@angular/core';

import { UserService }    from '../user/user.service';
import {
    ApiError,
    User
} from '../shared';

@Component({
    moduleId: module.id,
    selector: 'tda-todolist',
    templateUrl: './todolist.component.html'
})

export class LoginFormComponent {
    blah: string = "";
    constructor(private userService: UserService) {}

    test() : void {

    }

    onSubmit() : void {

    }

}
