import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

    private user: string;
    private time: Date;
    private serverUrl = '172.24.30.24:3000';
    public server: any;

    get userName() {
        return this.user;
    }

    get timeLogged() {
        return this.time;
    }

    set doLogin(user) {
        this.user = user;
        this.time = new Date();
        sessionStorage.setItem('name', user);
    }

    doLogout() {
        sessionStorage.clear();
    }

    constructor() {

        if (!sessionStorage.getItem('name')) {
            while (this.user == null || this.user === '') {
                this.user = prompt('What is your name?');
            }
            this.time = new Date();
        } else {
            this.user = sessionStorage.getItem('name');
            this.time = new Date();
        }

        sessionStorage.setItem('name', this.user);

        this.server = io(this.serverUrl);
    }

}
