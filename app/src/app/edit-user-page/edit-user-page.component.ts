import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from '../user-form/user-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, of, Subscription, switchMap, tap } from 'rxjs';
import { UserService } from '../user.service';
import { UserHttpService } from '../user-http.service';
import { User } from '../user';

@Component({
  selector: 'app-edit-user-page',
  standalone: true,
  imports: [CommonModule, UserFormComponent],
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.css'],
})
export class EditUserPageComponent implements OnInit, OnDestroy {
  route = inject(ActivatedRoute);
  router = inject(Router);

  userService = inject(UserHttpService);
  userId: null | string = null;
  userToEdit: null | User = null;

  subRout: Subscription | null = null;

  onEditUser(user: User) {
    const { id, ...data } = user;
    this.userService.updateUser(id, data).subscribe({
      next: (data) => {
        console.log('Success'.toUpperCase());
        this.router.navigate(['/users']);
      },
      error: (err) => {
        console.log('Error'.toUpperCase());
        console.log(err);
      },
    });
  }

  /* Hooks */
  ngOnInit() {
    this.subRout = this.route.params
      .pipe(
        map((params) => params['userId']),
        tap((userId) => (this.userId = userId)),
        switchMap((userId) =>
          this.userService.getUser(userId).pipe(catchError((err) => of(null)))
        )
      )
      .subscribe({
        next: (user) => {
          // console.log(data);
          this.userToEdit = user;
        },
      });
  }

  ngOnDestroy(): void {
    this.subRout && this.subRout.unsubscribe();
  }
}
