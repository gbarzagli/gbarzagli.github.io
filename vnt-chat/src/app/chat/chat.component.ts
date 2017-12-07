import {
    Component,
    OnInit,
    AfterViewChecked,
    ElementRef,
    ViewChild,
    OnDestroy
} from '@angular/core';
import { ChatService } from './chat.service';
import { Message } from './model/message.model';
import { AuthService } from '../login/auth.service';
import { Subscription } from 'rxjs/Subscription';

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

    constructor(
        private _chatService: ChatService,
        private _authService: AuthService
    ) {
        this.subscription = _chatService.getMessages().subscribe(next => {
            this.messages.push(next);
        });

        this.user = _authService.userName;
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
        const message = this.message;
        if (message !== undefined && message !== '') {
            this._chatService.sendMessage(this.user, message);
            this.textArea.nativeElement.value = '';
            this.message = undefined;
        }
    }

    public ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}
