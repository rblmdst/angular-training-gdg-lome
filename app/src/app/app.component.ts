import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Njarasoa';
  age = 32;
  count = 2;
  tempName = 'N/A';

  mycolor = '';

  inputType = 'password';

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

  nameChanghed(name: string) {
    this.tempName = name;
  }

  toggle() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
}
