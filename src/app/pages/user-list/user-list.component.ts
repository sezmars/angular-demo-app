import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interfaces/user";
import {UsersService} from "../../services/users.service";
import {LocalStorageService} from "../../services/local-storage.service";
import {finalize, forkJoin, switchMap} from "rxjs";
import {SharedComponentsModule} from "../../shared/shared-components.module";
import {Router} from "@angular/router";
import {WeatherService} from "../../services/weather.service";
import {IWeather} from "../../interfaces/weather";

@Component({
  standalone: true,
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  imports: [
    SharedComponentsModule,
  ]
})
export class UserListComponent implements OnInit {
  public users!: Partial<IUser[]>
  public isLoading: boolean = false;

  constructor(
    private router: Router,
    private usersService: UsersService,
    private weatherService: WeatherService,
    private localStorageService: LocalStorageService) {
  }

  public ngOnInit() {
    this.isLoading = true;
    this.usersService.getUsers().pipe(
      switchMap((users: Partial<IUser[]>) => {
        this.users = users;
        const weatherRequests = users.map(user =>
          this.weatherService
            .getWeather(user!.location.coordinates.latitude, user!.location.coordinates.longitude, `GMT`)
        );
        return forkJoin(weatherRequests);
      }),
      finalize(() => this.isLoading = false)
    ).subscribe((weatherResponses) => {
      this.users.map((user, index) => user!.weather = <IWeather>weatherResponses[index])
    });
  }

  public async saveUser(event: MouseEvent, user: IUser): Promise<void> {
    /**
     * We can use the directive: stop-propagation
     * */
    event.preventDefault()
    event.stopPropagation()

    user.login.uuid ? this.localStorageService.saveData(user.login.uuid, user) : alert('UUID does not exist')

    await this.router.navigate(['/profile/' + user.login.uuid], {
      /**
       * Needed for the initial rendering of the map if we receive data by http GET => id
       * */
      queryParams: {
        latitude: user.location.coordinates.latitude,
        longitude: user.location.coordinates.longitude
      }
    })
  }

  public trackBy(index: number, user: any): string {
    return user.login.uuid;
  }
}
