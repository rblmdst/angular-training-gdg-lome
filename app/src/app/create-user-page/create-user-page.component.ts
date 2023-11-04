import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-create-user-page',
  standalone: true,
  imports: [CommonModule, UserFormComponent],
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.css'],
})
export class CreateUserPageComponent {}
