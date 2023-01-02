import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class User {
  id: number;
  username: string;
  created_at: string;

  constructor(private http: HttpClient) {
    this.id = 0;
    this.username = '';
    this.created_at = '';
  }

  get_user(): void {
    this.http.get('/api/user').subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  login<T>(username: string, password: string): Observable<T> {
    const request_data = {
      username: username,
      password: password,
    };

    return this.http.post<T>('api/user/login', request_data);
  }
}
