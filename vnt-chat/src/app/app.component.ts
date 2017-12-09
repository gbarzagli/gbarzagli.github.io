import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    protected title = 'VNT Messenger';

    server = '172.24.30.24:3000'; // 'http://bootcamp.us-east-1.elasticbeanstalk.com';

    ngOnInit() {
    }
}
