import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from '../user-item/user-item.component';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  @Input() users: User[] = [];
  @Output() showDetails = new EventEmitter<string>();
  @Output() removeUser = new EventEmitter<string>();
  @Output() editUser = new EventEmitter<string>();

  currentUser!: User;

  onDetails(userId: string) {
    console.log('Parent ', userId);
    this.showDetails.emit(userId);
  }

  onDelete(userId: string) {
    this.removeUser.emit(userId);
  }

  onEdit(userId: string) {
    this.editUser.emit(userId);
  }
}
