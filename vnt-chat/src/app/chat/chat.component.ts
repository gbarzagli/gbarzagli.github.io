import {
    Component,
    OnInit,
    AfterViewChecked,
    ElementRef,
    ViewChild,
    OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Message } from '../shared/model/message.model';
import { ChatService } from '../shared/chat.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked, OnDestroy {
    @ViewChild('scrollMe') scrollContainer: ElementRef;
    @ViewChild('messageArea') textArea: ElementRef;
    protected user: string;
    protected messages: Message[] = new Array<Message>();
    protected message: string;
    private subscription: Subscription;

    constructor(private _chatService: ChatService) {
        _chatService.server.on(next => {
            this.messages.push(next);
        });

        this.user = _chatService.userName;
    }

    ngOnInit() {
        this.scrollToBottom();
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    }

    public sendMessage() {
        const obj = {
            author: this._chatService.userName,
            message: this.message
        };
        alert(this._chatService.userName);
        this._chatService.server.emit('messages', obj);
        this.textArea.nativeElement.value = '';
        this.message = '';
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
