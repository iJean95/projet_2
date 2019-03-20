import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UsersComponent }      from './users/users.component';
import { UserDetailComponent }  from './user-detail/user-detail.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'users', component: UsersComponent },
  { path: 'timeline', component: TimelineComponent},
  { path: 'messages', component: MessagesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}