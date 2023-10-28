import { Component } from '@angular/core';
import { User } from './user';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserDetailsComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: User[] = [
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

  currentUser: User | null = null;

  onShowDetails(userId: string) {
    this.currentUser = this.users.find((user) => user.id === userId) || null;
  }
}
