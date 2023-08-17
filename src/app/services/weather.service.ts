import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IWeather, IWeatherBase} from "../interfaces/weather";

/**
 * Use the environment.ts correctly
 * */
const URL = 'https://api.open-meteo.com/v1/forecast'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  public getWeather(latitude: string, longitude: string, timezone: string): Observable<Partial<IWeather>> {
    return this.http.get<{
      daily: Partial<IWeatherBase>
    }>(`${URL}?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`)
      .pipe(map((data) => {
        const {
          temperature_2m_max: max,
          temperature_2m_min: min,
          time: dates,
          weathercode: codes,
        } = data.daily

        return {max, min, dates, codes}
      }))
  }
}
