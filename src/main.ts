import {HttpClientModule} from '@angular/common/http';
import {enableProdMode, importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter} from "@angular/router";

import {environment} from "~environments/environment";


import {APP_ROUTES} from "./app/app-routes";
import {AppComponent} from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter([
      ...APP_ROUTES,
    ]),
  ],
}).then();
