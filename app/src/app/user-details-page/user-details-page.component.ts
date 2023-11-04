import {
  Component,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { UserHttpService } from '../user-http.service';
import { User } from '../user';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-user-details-page',
  standalone: true,
  imports: [CommonModule, UserDetailsComponent],
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css'],
})
export class UserDetailsPageComponent implements OnInit, OnDestroy, OnChanges {
  @Input() userId: null | string = null;
  @Input() order: null | string = null;

  private route = inject(ActivatedRoute);
  userService = inject(UserHttpService);
  // @Input({ alias: 'userId' }) currentUserId: null | string = null;
  private subParam: Subscription | null = null;
  private subQueryParam: Subscription | null = null;

  user: User | null = null;

  ngOnInit() {
    /* this.subParam = this.route.params.pipe(map((params) => params)).subscribe({
      next: (data) => {
        this.currentUserId = data['userId'];
      },
    });

    this.subQueryParam = this.route.queryParams
      .pipe(map((params) => params))
      .subscribe({
        next: (data) => {
          console.log(data);
        },
      }); */
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('userId' in changes) {
      if (this.userId) {
        this.userService.getUser(this.userId).subscribe({
          next: (user) => (this.user = user),
        });
      }
    }
  }

  ngOnDestroy(): void {
    this.subParam && this.subParam.unsubscribe();
    this.subQueryParam && this.subQueryParam.unsubscribe();
  }
}
