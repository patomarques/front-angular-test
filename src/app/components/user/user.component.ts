import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { Repos } from '../../models/repos.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input() user: User;
  @Input() repos: Repos;

  ngOnInit() {
  }

}
