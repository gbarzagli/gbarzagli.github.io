import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConnectionService {

private restURL = 'https://jsonplaceholder.typicode.com/users';

    constructor(private httpClient: HttpClient) { }

    public getUsers(): Observable<Object> {
        return this.httpClient.get(this.restURL);
    }

}
