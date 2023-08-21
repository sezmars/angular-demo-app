import {CommonModule} from "@angular/common";
import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {icon, LatLng, latLng, LatLngExpression, LatLngTuple, Layer, marker, TileLayer, tileLayer} from "leaflet";

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
    position: LatLngExpression
  }

  public optionsSpec: { center: LatLngTuple; layers: { attribution: string; url: string }[]; zoom: number } = {
    layers: [{url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', attribution: 'Open Street Map'}],
    zoom: 5,
    center: [46.879966, -121.726909]
  };

  public zoom: number = this.optionsSpec.zoom;
  public center: LatLng = latLng(this.optionsSpec.center);
  public options: {layers: TileLayer[], zoom: number, center: LatLng} = {
    layers: [tileLayer(this.optionsSpec.layers.at(0)!.url, {attribution: this.optionsSpec.layers.at(0)!.attribution})],
    zoom: this.optionsSpec.zoom,
    center: latLng(this.optionsSpec.center)
  };
  public formZoom: number = this.zoom;
  public markers: Layer[] = [];

  private lat: number = this.center.lat;
  private lng: number = this.center.lng;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['markerOptions'].currentValue) {
      const position = changes['markerOptions'].currentValue.position;

      this.lat = position[0];
      this.lng = position[1];

      this.doApply();
      this.addMarker()
    }
  }

  public onCenterChange(center: LatLng): void {
    setTimeout(() => {
      this.lat = center.lat;
      this.lng = center.lng;
    });
  }

  public onZoomChange(zoom: number): void {
    setTimeout(() => {
      this.formZoom = zoom;
    });
  }

  private doApply(): void {
    this.center = latLng(this.lat, this.lng);
    this.zoom = this.formZoom;
  }


  private addMarker(): void {
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
