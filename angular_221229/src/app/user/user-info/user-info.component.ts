import { Component, SkipSelf, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { MatDialog } from '@angular/material/dialog';
import { UserInfoDetailComponent } from './user-info-detail/user-info-detail.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  constructor(
    @SkipSelf() public appService: AppService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openDialog(): void {
    this.dialog.open(UserInfoDetailComponent, {
      data: this.appService,
    });
  }
}
