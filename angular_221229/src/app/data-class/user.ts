import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class User {
  id: number;
  username: string;
  created_at: string;

  constructor() {
    this.id = 0;
    this.username = '';
    this.created_at = '';
  }
}
