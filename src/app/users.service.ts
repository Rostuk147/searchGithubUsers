import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
    constructor(private http: HttpClient){}

    getUser(username: string): Observable<any> {
        return this.http.get(`https://api.github.com/users/${username}?client_id=c81be8e7d5642bfb6034&client_secret=c5e4e8e6b71784009bc180212d4f3a6905341d68`);
    } 

}