import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GithubService } from '../../services/github.service';
import { User } from '../../models/user.model';
import { switchMap, debounceTime, catchError } from 'rxjs/operators';
import {EmptyObservable} from 'rxjs/observable/EmptyObservable';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public username: string;
  public hasUser: boolean = false;

  findControl = new FormControl();

  @Input() user: User = null;
  @Input() error: boolean = false;

  constructor(private githubService: GithubService) {
    if (typeof this.username !== 'undefined') {
      this.changeUserAndRepos();
    }
  }

  ngOnInit() {
    this.findControl.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap(value =>
          this.githubService.getUser(value).pipe(
            catchError(err => {
              this.user = [];
              this.error = true;
              return new EmptyObservable();
            })))
      ).subscribe(user => {
      this.user = user;
      this.error = false;
    });
  }

  findProfile() {
    if (typeof this.username !== 'undefined') {
      this.githubService.updateProfile(this.username);
      this.changeUserAndRepos();
    }
  }

  changeUserAndRepos() {
    this.hasUser = false;

    if ( this.username !== '') {
      this.githubService.getUser( this.username ).subscribe(user => {
        if (typeof user !== 'undefined') {
          console.log(user);
          this.user = user;
          this.hasUser = true;
        }
      });

      this.githubService.getUserRepos( this.username ).subscribe(repos => {
        console.log(repos);
        this.user.repos = repos;
      });
    }
  }
}
