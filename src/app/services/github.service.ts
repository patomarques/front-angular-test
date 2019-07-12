import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Repos } from '../models/repos.model';
import { Observable } from 'rxjs';

@Injectable()
export class GithubService {

  private username: string;

  constructor(private http: HttpClient) { }
  getUser(name: string): Observable<User> {
      this.updateProfile(name);
      const url = `https://api.github.com/users/${name}`;
      return this.http.get<User>(url);
  }

  getUserRepos(name: string): Observable<Repos> {
    this.updateProfile(name);
    const url = `https://api.github.com/users/${name}/repos`;
    return this.http.get<Repos>(url);
  }

  updateProfile(username: string) {
    this.username = username;
  }

}
