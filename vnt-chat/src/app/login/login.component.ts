import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChatService } from '../shared/chat.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    _username = '';

    constructor(private service: ChatService, private router: Router) {}

    ngOnInit() {
        if (this.service.isLogged()) {
            this.router.navigate(['chat']);
        }
    }

    login() {
        if (this._username.length > 0) {
            this.service.doLogin(this._username);
            this.router.navigate(['chat']);
        }
    }
}
