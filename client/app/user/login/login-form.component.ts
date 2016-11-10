import { Component }    from '@angular/core';

import { UserService }  from '../user.service';
import {
    ApiError,
    User
} from '../../shared';

@Component({
    moduleId: module.id,
    selector: 'tda-user-login',
    templateUrl: './login-form.component.html'
})

export class LoginFormComponent {
    err: ApiError = null;
    username: string = '';
    password: string = '';
    constructor(private userService: UserService) {}


    onSubmit() : void {
        this.userService.login(this.username, this.password).subscribe(
            null , //TODO weiterleiten
            null//err => this.err = err.json()
        );
    }

}
