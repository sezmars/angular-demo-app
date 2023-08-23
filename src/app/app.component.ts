import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SnackbarComponent } from '~shared/components/snackbar/snackbar.component';
import { SpinnerComponent } from '~shared/components/spinner/spinner.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [SpinnerComponent, SnackbarComponent, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: (s: PlatformLocation): string => s.getBaseHrefFromDOM(),
      deps: [PlatformLocation],
    },
  ],
})
export class AppComponent {
  public title: string = 'User Weather App';

  constructor(@Inject(APP_BASE_HREF) public baseHref: string) {}
}
