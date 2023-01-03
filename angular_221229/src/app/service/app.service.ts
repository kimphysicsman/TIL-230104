import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from 'src/app/data-class/user';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  user: User;

  constructor(private http: HttpClient) {
    this.user = new User();
    this.get_user();
  }

  set_user(): void {
    this.get_user().subscribe(
      (response: User) => {
        this.user.id = response.id;
        this.user.username = response.username;
        this.user.created_at = response.created_at;
      },
      (error) => console.log(error)
    );
  }

  get_user(): Observable<User> {
    return this.http.get<User>('/api/user', {
      headers: {},
      params: {},
      withCredentials: true,
    });
  }

  login<T>(username: string, password: string): Observable<T> {
    const request_data = {
      username: username,
      password: password,
    };

    return this.http.post<T>('api/user/login', request_data);
  }
}
