import {
    HTTP_INTERCEPTORS,
    HttpClientModule,
    provideHttpClient,
    withInterceptorsFromDi
} from '@angular/common/http';
import {enableProdMode, ErrorHandler, importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter} from "@angular/router";

import {environment} from "~environments/environment";
import {GlobalErrorHandlerService} from "~services/errors-handles/global-error-handler.service";
import {LoaderInterceptorService} from "~services/interceptors/loader-interceptor.service";
import {ServerErrorInterceptor} from "~services/interceptors/server-error.interceptor";

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
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ServerErrorInterceptor,
            multi: true,
        },
        { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
        provideRouter([
            ...APP_ROUTES,
        ]),
    ],
}).then();
