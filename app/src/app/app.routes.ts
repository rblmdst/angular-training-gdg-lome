import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';

export const routes: Routes = [
  { path: 'users', component: UserListPageComponent },
  { path: 'users/:userId', component: UserDetailsPageComponent },
  { path: '**', component: PageNotFoundComponent },
];
