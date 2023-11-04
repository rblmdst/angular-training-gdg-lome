import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { User } from './user';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent implements OnInit {
  currentUser: User | null = null;
  users: User[] = [];

  userService = inject(UserService);

  constructor(/* private userService: UserService */) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  onShowDetails(userId: string) {
    this.currentUser = this.userService.getUser(userId);
  }
  onRemoveUser(userId: string) {
    this.userService.deleteUser(userId);
    this.users = this.userService.getUsers();
  }
}
