import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
  // providers: [UserService],
})
export class UserItemComponent {
  @Input({ required: true }) user!: User;

  userUservice = inject(UserService);

  @Output() details = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();

  onDetails() {
    console.log('details', this.user.id);
    console.log(this.userUservice.getUsers());
    this.details.emit(this.user.id);
  }
  onDelete() {
    console.log('delete', this.user.id);
    this.remove.next(this.user.id);
  }
  onEdit() {
    console.log('edit', this.user.id);
  }
}
