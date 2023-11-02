import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 'a2bf',
      name: 'RakNj',
      sex: 'M',
    },
    {
      id: 'a2aa',
      name: 'AliK',
      sex: 'M',
    },
    {
      id: 'a19f',
      name: 'Ell@d',
      sex: 'F',
    },
  ];

  constructor() {
    console.log('INIT');
  }

  getUser(userId: string) {
    return this.users.find((user) => user.id === userId) || null;
  }

  deleteUser(userId: string) {
    this.users = this.users.filter((user) => user.id !== userId);
  }

  getUsers() {
    return this.users;
  }
}
