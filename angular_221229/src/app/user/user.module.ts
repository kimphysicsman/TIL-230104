import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserInfoDetailComponent } from './user-info/user-info-detail/user-info-detail.component';

@NgModule({
  declarations: [UserComponent, UserInfoComponent, UserInfoDetailComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
