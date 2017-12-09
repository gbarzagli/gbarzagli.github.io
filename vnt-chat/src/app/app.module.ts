import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './shared/chat.service';
import { HeaderComponent } from './header/header.component';
import { ConnectionService } from './shared/connection.service';
import { AuthGuard } from './shared/auth-guard.service';
import { AboutComponent } from './about/about.component';
import { routes } from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        ChatComponent,
        HeaderComponent,
        AboutComponent
    ],
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes, { enableTracing: false })],
    providers: [AuthGuard, ChatService, ConnectionService],
    bootstrap: [AppComponent]
})
export class AppModule {}
