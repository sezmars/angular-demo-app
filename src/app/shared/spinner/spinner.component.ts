import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

/**
 * Optimal solution: use in intersepotor
 * */
@Component({
  standalone: true,
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() isLoading: boolean = false;
}
