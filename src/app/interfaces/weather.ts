export interface IWeather {
  max: number[]
  min: number[]
  codes: number[]
  dates: string[],

}

export interface IWeatherBase {
  temperature_2m_max: number[],
  temperature_2m_min: number[],
  time: string[],
  weathercode: number[],
}
