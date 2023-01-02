import { Component, Input } from '@angular/core';

import { User } from 'src/app/data-class/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  @Input() user?: User;
}
