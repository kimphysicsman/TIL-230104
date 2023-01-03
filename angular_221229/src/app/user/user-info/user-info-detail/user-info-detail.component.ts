import { Component, SkipSelf, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-user-info-detail',
  templateUrl: './user-info-detail.component.html',
  styleUrls: ['./user-info-detail.component.css'],
})
export class UserInfoDetailComponent implements OnInit {
  constructor(@SkipSelf() public appService: AppService) {}

  ngOnInit(): void {}
}
