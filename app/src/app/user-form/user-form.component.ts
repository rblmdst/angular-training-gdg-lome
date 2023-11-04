import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { map, Subscription } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit, OnDestroy, OnChanges {
  /* NgModel/Template Drive Form */
  // name: string | null = null;
  @Input() action: 'edit' | 'create' = 'create';
  @Input() userToEdit: User | null = null;
  @Input() userId: string | null = null;

  @Output() editUser = new EventEmitter<User>();
  @Output() createUser = new EventEmitter<User>();

  sub: Subscription | null = null;
  form = new FormGroup({
    name: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    sex: new FormControl<string | null>(null, [Validators.required]),
  });

  onSubmit() {
    const value = this.form.value as any;
    if (this.action === 'create') {
      const id = crypto.randomUUID();
      this.createUser.emit({ ...value, id } as User);
    } else {
      this.editUser.emit({ ...value, id: this.userId } as User);
    }
  }
  /* Hooks */
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('userToEdit' in changes) {
      if (this.userToEdit) {
        this.form.patchValue(this.userToEdit);
      }
    }
  }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe();
  }

  /* Getters */
  get sexCtrl() {
    return this.form.get('sex') as FormControl<string | null>;
  }

  get nameCtrl() {
    return this.form.get('name') as FormControl<string | null>;
  }
}
