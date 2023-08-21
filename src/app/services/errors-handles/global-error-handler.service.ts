import {HttpErrorResponse} from "@angular/common/http";
import {ErrorHandler, Injectable, Injector} from '@angular/core';

import {ErrorService} from "~services/errors-handles/error-service.service";
import {LoggingService} from "~services/errors-handles/logging.service";
import {NotificationService} from "~services/errors-handles/notification.service";

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector) { }

  public handleError(error: Error | HttpErrorResponse) {
    const errorService = this.injector.get(ErrorService);
    const logger = this.injector.get(LoggingService);
    const notifier = this.injector.get(NotificationService);

    let message;
    const stackTrace: string = '';
    if (error instanceof HttpErrorResponse) {
      // Server error
      message = errorService.getServerErrorMessage(error);
      //stackTrace = errorService.getServerErrorStackTrace(error);
      notifier.showError(message, 'bottom');
    } else {
      // Client Error
      message = errorService.getClientErrorMessage(error);
      notifier.showError(message, 'bottom');
    }
    // Always log errors
    logger.logError(message, stackTrace);
  }
}
