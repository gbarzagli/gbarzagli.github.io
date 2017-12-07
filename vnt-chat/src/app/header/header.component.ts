import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AuthService } from '../login/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() title: string;
    protected user: string;
    protected timeLogged: Date;

    constructor(private _authService: AuthService,  private _router: Router) {
        this.user = _authService.userName;
        this.timeLogged = _authService.timeLogged;
    }

    ngOnInit() {}

    logout() {
        this._authService.doLogout();
        this._router.navigate(['']);
    }

}
