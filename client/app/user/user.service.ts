import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';
<<<<<<< HEAD
=======
//import { CookieService }    from 'angular2-cookie/core';
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
import { BehaviorSubject }  from 'rxjs/BehaviorSubject';
import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User }             from '../shared/index';

@Injectable()
export class UserService{
    private loginUrl = './login';
    private loggedinUrl = './loggedin';
    private signupUrl = './signup';
    private logoutUrl = './logout';
    private headers = new Headers({'Content-Type': 'application/json'});

    private _loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(new User({}));
    public loggedInUser: Observable<User> = this._loggedInUser.asObservable();

    constructor (private http: Http) {
        this.init();
    }

    init(): void {
<<<<<<< HEAD
        this.getLoggedinUser().subscribe();
=======
        this.getLoggedinUser().subscribe(res => console.log("test"));
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
    }

    login(username: string, password: string): Observable<void> {
        let body = JSON.stringify({username: username, password: password});

        return this.http.post(this.loginUrl, body, {headers: this.headers})
            .map(
                res => {
                    //this.cookieService.remove('connect.sid');
                    this._loggedInUser.next(new User(res.json()))
                }
                //TODO handle Error
            );
    }

    getLoggedinUser(): Observable<void> {
        if(!this._loggedInUser.getValue().username) {
            return this.http.get(this.loggedinUrl,{headers: this.headers})
                .map(
                    res => this._loggedInUser.next(new User(res.json()))
                );
        }
    }

    logout(): Observable<void> {
        return this.http.get(this.logoutUrl, {headers: this.headers})
            .map(res => {

                this._loggedInUser.next(new User({}))
            });
    }

   /*signup(username: string, password: string, firstName: string, lastName: string, email: string): Promise<any> {
        let body = JSON.stringify({
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email
        });

        return this.http.post(this.signupUrl, body, {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }*/



    /*getLoggedinUser(): Promise<any> {
        if(this.loggedinUser) {
            return Promise.resolve(this.loggedinUser);
        } else {
            return this.http.get(this.loggedinUrl)
                .toPromise()
                .then(res => {
                    if(res.status == 200) return this.loggedinUser = new User(res.json());
                    return false;
                })
                .catch(err => alert(err));
        }
    }*/

    private handleError(error: any): Promise<any> {
        console.error('An error occurred (userService)', error); // for demo purposes only
        return Promise.reject(error);
    }
}