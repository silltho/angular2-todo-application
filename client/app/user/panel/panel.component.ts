import { Component }    from '@angular/core';

import { UserService }  from '../user.service';
import { User }         from '../../shared';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2

@Component({
    moduleId: module.id,
    selector: 'tda-user-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})

export class PanelComponent {
    private user: User;
<<<<<<< HEAD
    constructor(private userService: UserService, private router: Router) {
        this.userService.loggedInUser.subscribe(user => {
            this.user = user;
            this.user = user;
            this.router.navigate(['todos']);
        }, error => {
            this.router.navigate(['start']);
        });
    }

    logoutUser() : void {
        this.userService.logout().subscribe(res => this.router.navigate(['start']), err => console.log("logouterror"));
=======
    constructor(private userService: UserService) {
        this.userService.loggedInUser.subscribe(user => this.user = user);
    }

    logoutUser() : void {
        this.userService.logout().subscribe(res => console.log("logoutsuccess"), err => console.log("logouterror"));
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
    }
}
