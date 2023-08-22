import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  public getClientErrorMessage(error: Error): string {
    return error.message ? error.message : error.toString();
  }

  public getServerErrorMessage(error: HttpErrorResponse): string {
    return navigator.onLine ? error.message : 'No Internet Connection';
  }
}
