import { NgModule }         from '@angular/core';
import { HttpModule }       from '@angular/http';
import { FormsModule }      from '@angular/forms';
import { BrowserModule }    from '@angular/platform-browser';

import { AppComponent }         from './app.component';
import { StartComponent }       from './start/start.component';
import { TodoListComponent }       from './todolist/todolist.component';
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
        TodoListComponent,
        LoginFormComponent,
        PanelComponent
    ],
    providers: [
        UserService
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }