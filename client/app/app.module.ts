import { NgModule }         from '@angular/core';
import { HttpModule }       from '@angular/http';
import { FormsModule }      from '@angular/forms';
import { BrowserModule }    from '@angular/platform-browser';
<<<<<<< HEAD

import { AppComponent }         from './app.component';
import { StartComponent }       from './start/start.component';
import { TodoListComponent }       from './todolist/todolist.component';
=======
//import { CookieService }    from '../node_modules/angular2-cookie/core';

import { AppComponent }         from './app.component';
import { StartComponent }       from './start/start.component';
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
import {
    LoginFormComponent,
    PanelComponent,
    UserService
} from './user/index';
import { routing }              from './app.routing';

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        StartComponent,
<<<<<<< HEAD
        TodoListComponent,
=======
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
        LoginFormComponent,
        PanelComponent
    ],
    providers: [
        UserService
<<<<<<< HEAD
=======
        //CookieService
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }