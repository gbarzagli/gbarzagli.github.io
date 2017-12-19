import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ChatService } from './chat.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _userService: ChatService, private _router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (!this._userService.isLogged()) {
            this._router.navigate(['login']);
            return false;
        }

        return true;
    }
}
