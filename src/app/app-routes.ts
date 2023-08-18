import {Route} from "@angular/router";
import {NotFoundComponent} from "~shared/not-found/not-found.component";

export const APP_ROUTES: Route[] = [
  {path: '', redirectTo: 'user-list', pathMatch: 'full'},
  {
    path: 'user-list',
    loadChildren: () => import('./modules/users/users.routes').then(m => m.USER_ROUTES),
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];
