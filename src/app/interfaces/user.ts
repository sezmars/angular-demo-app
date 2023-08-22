import { IWeather } from './weather';

export interface IUser {
  /*
   * We can use class-transformer and create getter like fullName
   * */
  weather: IWeather;
  name: {
    title: string;
    first: string;
    last: string;
  };
  gender: string;
  login: {
    uuid: string;
  };
  picture: {
    large: string;
  };
  location: {
    coordinates: {
      latitude: string;
      longitude: string;
    };
    city: string;
    country: string;
  };
  email: string;
}
