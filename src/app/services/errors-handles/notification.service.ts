import { Injectable, NgZone } from '@angular/core';

import { SnackbarService } from '~services/ui/snackbar.service';
import {
  SnackbarType,
  TSnackbarPosition,
} from '~shared/components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(
    private zone: NgZone,
    private snackbarService: SnackbarService
  ) {}

  public showSuccess(message: string, position: TSnackbarPosition): void {
    this.zone.run(() => {
      this.snackbarService.openSnackbar(
        message,
        SnackbarType.Success,
        position,
        3000
      );
    });
  }

  public showError(message: string, position: TSnackbarPosition): void {
    this.zone.run(() => {
      this.snackbarService.openSnackbar(
        message,
        SnackbarType.Error,
        position,
        0
      );
    });
  }
}
