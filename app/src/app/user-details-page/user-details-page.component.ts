import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css'],
})
export class UserDetailsPageComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  // @Input({ alias: 'userId' }) currentUserId: null | string = null;

  @Input() userId: null | string = null;
  @Input() order: null | string = null;

  private subParam: Subscription | null = null;
  private subQueryParam: Subscription | null = null;

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

  ngOnDestroy(): void {
    this.subParam && this.subParam.unsubscribe();
    this.subQueryParam && this.subQueryParam.unsubscribe();
  }
}
