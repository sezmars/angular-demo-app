import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ButtonComponent} from "./button/button.component";
import {CardComponent} from "./card/card.component";
import {MapComponent} from "./map/map.component";
import {SpinnerComponent} from "./spinner/spinner.component";
import {WeatherComponent} from './weather/weather.component';

/**
 * To simplify the import, we will use the NgModule
 * */
@NgModule({
  imports: [
    MapComponent,
    CommonModule,
    CardComponent,
    ButtonComponent,
    SpinnerComponent,
    WeatherComponent,
  ],
  exports: [
    MapComponent,
    CommonModule,
    CardComponent,
    ButtonComponent,
    SpinnerComponent,
    WeatherComponent,
  ],
})
export class SharedComponentsModule {
}
