import {AsyncPipe, NgIf} from "@angular/common";
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

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
  @Input() isLoading: boolean | null = false;
}
