import {AsyncPipe, NgIf} from "@angular/common";
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Subject} from "rxjs";

import {SpinnerService} from "~services/ui/spinner.service";

/**
 * Optimal solution: use in intersepotor
 * */
@Component({
  standalone: true,
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  imports: [
    NgIf,
    AsyncPipe
  ],
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {
  public isLoading: Subject<boolean> = this.spinnerService.isLoading;

  constructor(private spinnerService: SpinnerService) {
  }
}
