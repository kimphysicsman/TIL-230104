import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular_221229';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onClick(): void {
    this.reqeust_login().subscribe(
      (response: any) => (this.title = response.message),
      (error) => (this.title = error.error.message)
    );
  }

  reqeust_login<T>(): Observable<T> {
    let request_data = {
      username: 'admin',
      password: '0000',
    };

    return this.http.post<T>('api/user/login', request_data);
  }
}
