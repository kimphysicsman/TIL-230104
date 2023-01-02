import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../data-class/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user: User = new User(this.http);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.user.get_user();
  }
}
