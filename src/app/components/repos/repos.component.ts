import { Component, OnInit, Input } from '@angular/core';
import { Repos } from '../../models/repos.model';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  constructor() { }

  @Input() repos: Repos;

  ngOnInit() {
  }

}
