import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  public logError(message: string, stack: string) {
    // Send errors to server here
    if (stack)  {
      console.info('LoggingService stack: ' + stack);
    }
    console.info('LoggingService message: ' + message);
  }
}
