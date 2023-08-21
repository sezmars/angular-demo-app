import {CommonModule} from "@angular/common";
import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import {IWeather, IWeatherBase} from "~interfaces/weather";

import {ButtonComponent} from "../button/button.component";
import {CardComponent} from "../card/card.component";
import {SpinnerComponent} from "../spinner/spinner.component";

@Component({
  standalone: true,
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  imports: [
    CommonModule,
    ButtonComponent,
    CardComponent,
    SpinnerComponent
  ],
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnChanges {
  @Input() public weather!: IWeather
  public currentTemperature!: number;
  protected readonly Math: Math = Math;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['weather'].currentValue) {
      this.prepareCurrentTemp(changes['weather'].currentValue)
    }
  }

  public formatDay(dateStr: string): string {
    return new Intl.DateTimeFormat("en", {
      weekday: "short",
    }).format(new Date(dateStr));
  }

  public getWeatherIcon(wmoCode: number): string {
    const icons = new Map([
      [[0], "☀️"],
      [[1], "🌤"],
      [[2], "⛅️"],
      [[3], "☁️"],
      [[45, 48], "🌫"],
      [[51, 56, 61, 66, 80], "🌦"],
      [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
      [[71, 73, 75, 77, 85, 86], "🌨"],
      [[95], "🌩"],
      [[96, 99], "⛈️"],
    ]);
    const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
    if (!arr) return "NOT FOUND";
    return <string>icons.get(arr);
  }

  private prepareCurrentTemp(value: Partial<IWeatherBase>): void {
    const currentDateTime = new Date(); // Получаем текущую дату и время

    const currentTimestamp = currentDateTime.getTime();

    const timestamps = value.hourly!.time.map((time: string | number | Date) => new Date(time).getTime());

    const closestTimestamp = timestamps.reduce((prev: number, curr: number) =>
      Math.abs(curr - currentTimestamp) < Math.abs(prev - currentTimestamp) ? curr : prev
    );

    const closestTimeIndex = timestamps.indexOf(closestTimestamp);

    if (closestTimeIndex !== -1) {
      this.currentTemperature = value.hourly!.temperature_2m[closestTimeIndex]
    } else {
      console.info('Weather data not found for the current time range.');
    }
  }
}
