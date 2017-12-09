import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { AuthGuard } from './shared/auth-guard.service';

export const routes: Routes = [
    { path: '', redirectTo: 'chat', pathMatch: 'full' },
    { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
    { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
    { path: '**', component: ChatComponent }
];
