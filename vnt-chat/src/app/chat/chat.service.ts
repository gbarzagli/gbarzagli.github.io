import { ActivatedRoute, Route } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

import { AuthService } from '../login/auth.service';
import { Message } from './model/message.model';

@Injectable()
export class ChatService {
    private user: string;
    private time: Date;
    private serverUrl = 'localhost:3000';
    public server: any;

    constructor() {
        this.server = io(this.serverUrl);
    }

    public sendMessage(user: string, message: string): void {
        if (message !== undefined && message !== '') {
            const obj = {
                author: user,
                message: message
            };
            this.server.emit('messages', obj);
        }
    }

    public getMessages(): Observable<Message> {
        const observable = new Observable<Message>(observer => {
            this.server.on('messages', msg => {
                observer.next(msg);
            });
        });
        return observable;
    }
}
