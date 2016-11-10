import { Component }    from '@angular/core';

import { UserService }  from '../user.service';
import { User }         from '../../shared';

@Component({
    moduleId: module.id,
    selector: 'tda-user-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})

export class PanelComponent {
    private user: User;
    constructor(private userService: UserService) {
        this.userService.loggedInUser.subscribe(user => this.user = user);
    }

    logoutUser() : void {
        this.userService.logout().subscribe(res => console.log("logoutsuccess"), err => console.log("logouterror"));
    }
}
