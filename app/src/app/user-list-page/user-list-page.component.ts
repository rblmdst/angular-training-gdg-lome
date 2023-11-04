import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../user-list/user-list.component';
import { UserHttpService } from '../user-http.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { catchError, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-user-list-page',
  standalone: true,
  imports: [CommonModule, UserListComponent],
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css'],
})
export class UserListPageComponent implements OnInit {
  userService = inject(UserHttpService);
  router = inject(Router);
  users: User[] = [];

  onShowDetails(userId: string) {
    // users/:userId
    this.router.navigate(['/users/', userId]);
  }

  onRemoveUser(userId: string) {
    this.userService
      .deleteUser(userId)
      .pipe(
        tap(() => {
          console.log('Success'.toUpperCase());
        }),
        catchError((err) => {
          console.log(err);
          return of([]);
        }),
        switchMap(() => this.userService.getUsers())
      )
      .subscribe({
        next: (users) => {
          this.users = users;
        },
      });
  }

  onEditUser(userId: string) {
    this.router.navigate(['/users/edit', userId]);
  }

  /* Hook */
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (users) => (this.users = users),
      error: (err) => {
        console.log(err);
        this.users = [];
      },
    });
  }
}
