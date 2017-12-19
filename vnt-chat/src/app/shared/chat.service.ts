import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

    private user: string;
    private time: Date;
    private serverUrl = 'localhost:3000';
    public server: any;

    get userName(): string {
        return this.user;
    }

    get timeLogged(): Date {
        return this.time;
    }

    public isLogged(): boolean {
        return (this.user != null && this.time != null);
    }

    doLogin(user) {
        this.user = user;
        this.time = new Date();
        sessionStorage.setItem('name', user);
    }

    doLogout() {
        sessionStorage.clear();
    }

    constructor() {

        if (sessionStorage.getItem('name')) {
            this.user = sessionStorage.getItem('name');
            this.time = new Date();
        }

        this.server = io(this.serverUrl);
    }

}
