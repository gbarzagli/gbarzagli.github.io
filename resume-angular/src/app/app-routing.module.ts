import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: ResumeComponent },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
