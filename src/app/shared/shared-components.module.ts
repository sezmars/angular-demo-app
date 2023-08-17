import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "./button/button.component";
import {CardComponent} from "./card/card.component";
import {SpinnerComponent} from "./spinner/spinner.component";
import {WeatherComponent} from './weather/weather.component';
import {MapComponent} from "./map/map.component";

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
