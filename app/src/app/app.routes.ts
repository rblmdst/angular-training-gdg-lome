import { Routes } from '@angular/router';
import { CreateUserPageComponent } from './create-user-page/create-user-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';

export const routes: Routes = [
  { path: 'users', component: UserListPageComponent },
  { path: 'users/create', component: CreateUserPageComponent },
  { path: 'users/:userId', component: UserDetailsPageComponent },
  { path: '**', component: PageNotFoundComponent },
];
