import {Route} from '@angular/router';

import {UserLayoutComponent} from "./user-layout/user-layout.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserViewedListComponent} from "./user-viewed-list/user-viewed-list.component";

export const USER_ROUTES: Route[] = [
  {
    path: '', component: UserLayoutComponent,
    children: [
      {path: 'list', component: UserListComponent},
      {path: 'viewed', component: UserViewedListComponent},
    ]
  },
  {
    path: `profile/:uuid`, loadComponent: () => import('./user-profile/user-profile.component')
      .then(m => m.UserProfileComponent)
  },
];
