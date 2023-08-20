import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocalStorageService} from "~services/local-storage.service";
import {ButtonComponent} from "~shared/components/button/button.component";
import {CardComponent} from "~shared/components/card/card.component";
import {WeatherComponent} from "~shared/components/weather/weather.component";
import {IUser} from "~interfaces/user";
import {Observable} from "rxjs";

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

  public trackBy(index: number, user: any): string {
    return user.login.uuid;
  }
}
