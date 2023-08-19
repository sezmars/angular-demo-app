import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {icon, LatLng, latLng, Layer, marker, tileLayer} from "leaflet";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-map',
  templateUrl: './map.component.html',
  imports: [
    LeafletModule,
    CommonModule,
  ],
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnChanges {
  @Input() public markerOptions!: {
    id?: string,
    name: string,
    picture: string,
    description: string,
    position: LatLng | any
  }

  public optionsSpec: any = {
    layers: [{url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', attribution: 'Open Street Map'}],
    zoom: 5,
    center: [46.879966, -121.726909]
  };

  public zoom = this.optionsSpec.zoom;
  public center = latLng(this.optionsSpec.center);
  public options = {
    layers: [tileLayer(this.optionsSpec.layers[0].url, {attribution: this.optionsSpec.layers[0].attribution})],
    zoom: this.optionsSpec.zoom,
    center: latLng(this.optionsSpec.center)
  };
  public formZoom = this.zoom;
  public markers: Layer[] = [];

  private lat = this.center.lat;
  private lng = this.center.lng;

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['markerOptions'].currentValue) {
      const position = changes['markerOptions'].currentValue.position;

      this.lat = position[0];
      this.lng = position[1];

      this.doApply();
      this.addMarker()
    }
  }

  public onCenterChange(center: LatLng) {
    setTimeout(() => {
      this.lat = center.lat;
      this.lng = center.lng;
    });
  }

  public onZoomChange(zoom: number) {
    setTimeout(() => {
      this.formZoom = zoom;
    });
  }

  private doApply() {
    this.center = latLng(this.lat, this.lng);
    this.zoom = this.formZoom;
  }


  private addMarker() {
    const newMarker = marker(
      this.markerOptions.position,
      {
        icon: icon({
          iconSize: [50, 50],
          iconAnchor: [13, 41],
          iconUrl: this.markerOptions.picture,
          iconRetinaUrl: this.markerOptions.picture,
          shadowUrl: 'assets/leaflet/marker-shadow.png'
        }),
      }
    );
    this.markers.push(newMarker);
  }

}
