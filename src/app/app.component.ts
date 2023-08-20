import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

import {SpinnerComponent} from "~shared/components/spinner/spinner.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
    imports: [
        RouterLink,
        RouterOutlet,
        SpinnerComponent
    ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public title: string = 'User Weather App';
}
