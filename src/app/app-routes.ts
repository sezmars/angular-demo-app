import {Route} from "@angular/router";
import {NotFoundComponent} from "~shared/components/not-found/not-found.component";

export const APP_ROUTES: Route[] = [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {
    path: 'user',
    loadChildren: () => import('./modules/users/users.routes').then(m => m.USER_ROUTES),
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];
