import {Injectable, NgZone} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
      private zone: NgZone) { }

  public showSuccess(message: string): void {
    // Had an issue with the snackbar being ran outside of angular's zone.
    this.zone.run(() => {
      alert(message)
    });
  }

  public showError(message: string): void {
    this.zone.run(() => {
      // The second parameter is the text in the button.
      // In the third, we send in the css class for the snack bar.
      alert(message)
    });
  }
}
