import { Component }    from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2

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
<<<<<<< HEAD
    constructor(private userService: UserService) {}
=======
    constructor(private userService: UserService, private router: Router) {}
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2


    onSubmit() : void {
        this.userService.login(this.username, this.password).subscribe(
<<<<<<< HEAD
            null , //TODO weiterleiten
=======
            function() {
                console.log("test1");
                this.router.navigate('test123');
            }, //TODO weiterleiten
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
            null//err => this.err = err.json()
        );
    }

}
