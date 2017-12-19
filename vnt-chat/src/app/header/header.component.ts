import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../shared/chat.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() title: string;
    protected user: string;
    protected timeLogged: Date;

    constructor(private _chatService: ChatService, private _router: Router) {
        this.user = _chatService.userName;
        this.timeLogged = _chatService.timeLogged;
    }

    ngOnInit() {}

    logout() {
        this._chatService.doLogout();
        window.location.href = '';
    }

    showElements(): boolean {
        return this._chatService.isLogged();
    }

}
