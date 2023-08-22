// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {IEnv} from "~interfaces/env";

export const environment: IEnv = {
  production: false,
  domain: 'http://localhost:4200',
  randomUserApi: 'https://randomuser.me/api/',
  randomQuotableApi: 'https://api.quotable.io/random',
  openMeteoApi: 'https://api.open-meteo.com/v1/forecast',
};
