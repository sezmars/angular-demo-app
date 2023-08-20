import {
    HTTP_INTERCEPTORS,
    HttpClientModule,
    provideHttpClient,
    withInterceptorsFromDi
} from '@angular/common/http';
import {enableProdMode, importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter} from "@angular/router";

import {environment} from "~environments/environment";
import {LoaderInterceptorService} from "~services/loader-interceptor.service";

import {APP_ROUTES} from "./app/app-routes";
import {AppComponent} from './app/app.component';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(HttpClientModule),
        provideHttpClient(
            withInterceptorsFromDi(),
        ),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptorService,
            multi: true,
        },
        provideRouter([
            ...APP_ROUTES,
        ]),
    ],
}).then();
