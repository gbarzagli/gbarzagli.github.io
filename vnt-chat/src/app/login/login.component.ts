import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { routes } from '../app-routing.module';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    protected user: string;

    constructor(private _authService: AuthService, private _router: Router) {}

    ngOnInit() {
        if (sessionStorage.getItem('name') != null) {
            this.user = sessionStorage.getItem('name');
            this._router.navigate(['chat']);
        }
    }

    login() {
      if (this.user) {
        this._authService.doLogin(this.user);
        this._router.navigate(['chat']);
      }
    }
}
