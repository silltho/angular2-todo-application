import { Component }    from '@angular/core';

import { UserService }  from '../user.service';
import { User }         from '../../shared';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'tda-user-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})

export class PanelComponent {
    private user: User;
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
    }
}
