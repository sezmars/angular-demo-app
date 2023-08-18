import {Route} from "@angular/router";

export const APP_ROUTES: Route[] = [
  {path: '', redirectTo: 'user-list', pathMatch: 'full'},
  {
    path: 'user-list',
    loadChildren: () => import('./modules/users/users.routes').then(m => m.USER_ROUTES),
  },
  { path: '**', redirectTo: '404' },
];
