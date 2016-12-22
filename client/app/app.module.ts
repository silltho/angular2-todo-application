import { NgModule }         from '@angular/core';
import { HttpModule }       from '@angular/http';
import { FormsModule }      from '@angular/forms';
import { BrowserModule }    from '@angular/platform-browser';
//import { CookieService }    from '../node_modules/angular2-cookie/core';

import { AppComponent }         from './app.component';
import { StartComponent }       from './start/start.component';
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
        LoginFormComponent,
        PanelComponent
    ],
    providers: [
        UserService
        //CookieService
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }