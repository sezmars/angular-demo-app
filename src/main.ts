import {enableProdMode, importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {environment} from "~environments/environment";
import {provideRouter} from "@angular/router";
import {APP_ROUTES} from "./app/app-routes";

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
