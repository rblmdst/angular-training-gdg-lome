import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from './user';

const API_BASE_URL = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  http = inject(HttpClient);

  constructor() {}

  getUsers() {
    return this.http.get<User[]>(API_BASE_URL);
  }

  updateUser(userId: string, data: Omit<User, 'id'>) {
    return this.http.put(`${API_BASE_URL}/${userId}`, data);
  }

  getUser(userId: string) {
    return this.http.get<User>(`${API_BASE_URL}/${userId}`);
  }

  deleteUser(userId: string) {
    return this.http.delete<User>(`${API_BASE_URL}/${userId}`);
  }

  createUser(user: User) {
    return this.http.post<User>(API_BASE_URL, user);
  }
}
