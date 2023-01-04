import { Component, OnInit, Inject } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-info-detail',
  templateUrl: './user-info-detail.component.html',
  styleUrls: ['./user-info-detail.component.css'],
})
export class UserInfoDetailComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<UserInfoDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AppService
  ) {
    dialogRef.addPanelClass('user-info-detail-box');
  }

  ngOnInit(): void {}
}
