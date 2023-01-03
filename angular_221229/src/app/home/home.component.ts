import { Component, SkipSelf } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  username = 'admin';
  password = '0000';

  constructor(
    @SkipSelf() public appService: AppService,
    private router: Router
  ) {}

  onClick(): void {
    this.appService.login(this.username, this.password).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => console.log(error),
      () => this.router.navigate(['/user'])
    );
  }
}
