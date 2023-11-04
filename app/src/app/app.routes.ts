import { Routes } from '@angular/router';
import { CreateUserPageComponent } from './create-user-page/create-user-page.component';
import { EditUserPageComponent } from './edit-user-page/edit-user-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', component: UserListPageComponent },
  { path: 'users/create', component: CreateUserPageComponent },
  { path: 'users/edit/:userId', component: EditUserPageComponent },
  { path: 'users/:userId', component: UserDetailsPageComponent },
  { path: '**', component: PageNotFoundComponent },
];
