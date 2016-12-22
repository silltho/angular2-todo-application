import { Component }    from '@angular/core';
import { Router } from '@angular/router';

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
    constructor(private userService: UserService, private router: Router) {}


    onSubmit() : void {
        this.userService.login(this.username, this.password).subscribe(
            function() {
                console.log("test1");
                this.router.navigate('test123');
            }, //TODO weiterleiten
            null//err => this.err = err.json()
        );
    }

}
