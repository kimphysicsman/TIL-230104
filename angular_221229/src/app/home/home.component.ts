import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../data-class/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() user: User = new User(this.http);
  username = 'admin';
  password = '0000';

  constructor(private http: HttpClient, private router: Router) {}

  onClick(): void {
    this.user.login(this.username, this.password).subscribe(
      (response) => this.router.navigate(['/user']),
      (error) => console.log(error)
    );
  }
}
