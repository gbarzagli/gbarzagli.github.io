import { Component, OnInit } from '@angular/core';

import * as JQuery from 'jquery';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';

    public ngOnInit(): void {
        JQuery(".button-collapse").sideNav();
    }
}
