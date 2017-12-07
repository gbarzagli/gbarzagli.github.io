import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './chat/chat.service';
import { HeaderComponent } from './header/header.component';
import { ConnectionService } from './shared/connection.service';
import { AuthGuard } from './shared/auth-guard.service';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        ChatComponent,
        HeaderComponent,
        AboutComponent,
        LoginComponent
    ],
    imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
    providers: [AuthService, AuthGuard, ChatService, ConnectionService],
    bootstrap: [AppComponent]
})
export class AppModule {}
