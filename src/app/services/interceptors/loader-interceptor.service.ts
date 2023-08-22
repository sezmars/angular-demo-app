import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';

import { SpinnerService } from '~services/ui/spinner.service';

@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}
  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.spinnerService.show();

    return next
      .handle(request)
      .pipe(finalize(() => this.spinnerService.hide()));
  }
}
