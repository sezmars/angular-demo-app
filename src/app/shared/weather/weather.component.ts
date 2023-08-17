import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CommonModule} from "@angular/common";
import {IWeather} from "../../interfaces/weather";
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
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnChanges {
  @Input() weather!: IWeather
  public isLoading: boolean = true;
  protected readonly Math = Math;

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['weather'].currentValue) {
      this.isLoading = false
    }
  }

  public formatDay(dateStr: string) {
    return new Intl.DateTimeFormat("en", {
      weekday: "short",
    }).format(new Date(dateStr));
  }

  public getWeatherIcon(wmoCode: number) {
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
      [[96, 99], "⛈"],
    ]);
    const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
    if (!arr) return "NOT FOUND";
    return icons.get(arr);
  }
}
