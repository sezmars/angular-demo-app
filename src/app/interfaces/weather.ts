export interface IWeather {
  max: number[];
  min: number[];
  codes: number[];
  dates: string[];
  hourly?: IHourlyBase;
}

export interface IWeatherBase {
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  time: string[];
  weathercode: number[];
  hourly: IHourlyBase;
}
export interface IHourlyBase {
  time: string[];
  windspeed_10m: number[];
  temperature_2m: number[];
  surface_pressure: number[];
  relativehumidity_2m: number[];
  apparent_temperature: number[];
}
