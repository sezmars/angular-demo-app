import {ChangeDetectionStrategy, Component, OnInit, TrackByFunction} from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject, finalize, forkJoin, switchMap} from "rxjs";

import {IUser} from "~interfaces/user";
import {IWeather} from "~interfaces/weather";
import {LocalStorageService} from "~services/local-storage.service";
import {UsersService} from "~services/users.service";
import {WeatherService} from "~services/weather.service";
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
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private usersService: UsersService,
    private weatherService: WeatherService,
    private localStorageService: LocalStorageService) {
  }

  public ngOnInit() {
    this.isLoading$.next(true)
    this.usersService.getUsers().pipe(
      switchMap((users: Partial<IUser[]>) => {
        this.users = users;
        const weatherRequests = users.map(user =>
          this.weatherService
            .getWeather(user!.location.coordinates.latitude, user!.location.coordinates.longitude, `GMT`)
        );
        return forkJoin(weatherRequests);
      }),
      finalize(() => this.isLoading$.next(false))
    ).subscribe((weatherResponses) => {
      this.users?.map((user, index) => user!.weather = <IWeather>weatherResponses[index])
    });
  }

  public async saveUser(event: MouseEvent, user: IUser): Promise<void> {

    user.login.uuid ? this.localStorageService.saveData(user.login.uuid, user) : alert('UUID does not exist')

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
