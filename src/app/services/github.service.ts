import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { User } from '../models/user.model';

@Injectable()
export class GithubService {

    constructor(private http: HttpClient) { }
    getUser(name: string): Observable<User> {
        const url = `https://api.github.com/users/${name}`;
        return this.http.get<User>(url);
    }

}
