import {Route} from '@angular/router';
import {UserListComponent} from "../../pages/user-list/user-list.component";

export const USER_ROUTES: Route[] = [
  {path: '', component: UserListComponent,
  children: [
    {
      path: `profile/:uuid`, loadComponent: () => import('../../pages/user-profile/user-profile.component')
        .then(m => m.UserProfileComponent)
    },
  ]},
];
