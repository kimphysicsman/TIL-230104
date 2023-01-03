import { Component, SkipSelf, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(@SkipSelf() public appService: AppService) {}

  ngOnInit(): void {}
}
