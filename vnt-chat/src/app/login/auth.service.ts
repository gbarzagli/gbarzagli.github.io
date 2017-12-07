import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService  {
    private user: string;
    private time: Date;

    constructor() {}

    get userName() {
        return this.user;
    }

    get timeLogged() {
        return this.time;
    }

    doLogin(user) {
        this.user = user;
        this.time = new Date();
        sessionStorage.setItem('name', this.user);
    }

    doLogout() {
        this.user = '';
        delete sessionStorage.name;
    }
}
