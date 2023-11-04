import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit, OnDestroy {
  /* NgModel/Template Drive Form */
  // name: string | null = null;
  sub: Subscription | null = null;

  nameCtrl = new FormControl(null, [
    Validators.required,
    Validators.minLength(3),
  ]);

  sexCtrl = new FormControl(null, [Validators.required]);

  form = new FormGroup({
    name: this.nameCtrl,
  });
  ngOnInit() {
    this.sub = this.nameCtrl.valueChanges
      .pipe(map((val: string | null) => (val ? val.toUpperCase() : '')))
      .subscribe({
        next: (value) => {
          console.log(value);
        },
      });
  }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe();
  }
}
