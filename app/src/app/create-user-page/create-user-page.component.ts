import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from '../user-form/user-form.component';
import { User } from '../user';
import { UserHttpService } from '../user-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user-page',
  standalone: true,
  imports: [CommonModule, UserFormComponent],
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.css'],
})
export class CreateUserPageComponent {
  userService = inject(UserHttpService);
  router = inject(Router);

  onCreateUser(user: User) {
    // http call
    this.userService.createUser(user).subscribe({
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
}
