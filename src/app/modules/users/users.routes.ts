import {Route} from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";

export const USER_ROUTES: Route[] = [
  {path: '', component: UserListComponent},
  {
    path: `profile/:uuid`, loadComponent: () => import('./user-profile/user-profile.component')
      .then(m => m.UserProfileComponent)
  },
];
