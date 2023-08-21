import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TrackByFunction} from '@angular/core';
import {Router} from "@angular/router";
import {finalize, forkJoin, switchMap} from "rxjs";

import {IUser} from "~interfaces/user";
import {IWeather} from "~interfaces/weather";
import {NotificationService} from "~services/errors-handles/notification.service";
import {LocalStorageService} from "~services/data/local-storage.service";
import {UsersService} from "~services/http/users.service";
import {WeatherService} from "~services/http/weather.service";
import {SharedComponentsModule} from "~shared/components/shared-components.module";
import {ClickStopPropagationDirective} from "~shared/directives/click-stop-propagation.directive";

@Component({
  standalone: true,
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  imports: [
    SharedComponentsModule,
    ClickStopPropagationDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
   public users: Partial<IUser[]> | undefined

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
    private usersService: UsersService,
    private weatherService: WeatherService,
    private notificationService: NotificationService,
    private localStorageService: LocalStorageService) {
  }

  public ngOnInit(): void {
    this.usersService.getUsers().pipe(
      switchMap((users: Partial<IUser[]>) => {
        this.users = users;
        const weatherRequests = users.map(user =>
          this.weatherService
            .getWeather(user!.location.coordinates.latitude, user!.location.coordinates.longitude, `GMT`)
        );
        return forkJoin(weatherRequests);
      }),
      finalize(() => this.cd.detectChanges())
    ).subscribe((weatherResponses) => {
      this.users?.map((user, index) => user!.weather = <IWeather>weatherResponses[index])
    });
  }

  public async saveUser(event: MouseEvent, user: IUser): Promise<void> {

    user.login.uuid ? this.localStorageService.saveData(user.login.uuid, user) : alert('UUID does not exist')

    this.notificationService.showSuccess('User added to watch list', 'top-right')

    await this.router.navigate(['user/profile/' + user.login.uuid], {
      /**
       * Needed for the initial rendering of the map if we receive data by http GET => id
       * */
      queryParams: {
        latitude: user.location.coordinates.latitude,
        longitude: user.location.coordinates.longitude
      }
    })
  }
  public trackBy: TrackByFunction<IUser | undefined> = (_, user) => user?.login.uuid
}
