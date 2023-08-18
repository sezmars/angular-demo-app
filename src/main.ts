import {enableProdMode, importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {environment} from "~environments/environment";
import {provideRouter} from "@angular/router";
import {UserListComponent} from "./app/pages/user-list/user-list.component";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter([
      {path: '', redirectTo: '/list', pathMatch: 'full'},
      {path: 'list', component: UserListComponent},
      {
        path: 'profile/:uuid', loadComponent: () => import('./app/pages/user-profile/user-profile.component')
          .then(m => m.UserProfileComponent)
      },
      { path: '**', redirectTo: '404' },
    ]),
  ],
}).then();
