import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, TrackByFunction} from '@angular/core';
import {Observable} from "rxjs";

import {IUser} from "~interfaces/user";
import {LocalStorageService} from "~services/local-storage.service";
import {ButtonComponent} from "~shared/components/button/button.component";
import {CardComponent} from "~shared/components/card/card.component";
import {WeatherComponent} from "~shared/components/weather/weather.component";


@Component({
  selector: 'app-user-viewed-list',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardComponent, WeatherComponent],
  templateUrl: './user-viewed-list.component.html',
  styleUrls: ['./user-viewed-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserViewedListComponent {
  public users$!: Observable<IUser[]>

  constructor(public localStorageService: LocalStorageService) {
    this.users$ = localStorageService.getSavedUsersFromLocalStorage();
  }

  public trackBy: TrackByFunction<IUser> = (_, user) => user.login.uuid

}
