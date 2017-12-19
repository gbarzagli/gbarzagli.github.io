import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './shared/chat.service';
import { HeaderComponent } from './header/header.component';
import { ConnectionService } from './shared/connection.service';
import { AuthGuard } from './shared/auth-guard.service';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        ChatComponent,
        HeaderComponent,
        AboutComponent,
        LoginComponent
    ],
    imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
    providers: [AuthGuard, ChatService, ConnectionService],
    bootstrap: [AppComponent]
})
export class AppModule {}
