import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-help-me',
  templateUrl: './help-me.component.html',
  styleUrls: ['./help-me.component.scss']
})
export class HelpMeComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 32.109333, lng: 34.855499 };
  zoom = 12;
  markerOptions: google.maps.MarkerOptions = { draggable: false, label: "helper" };
  markerPositions: google.maps.LatLngLiteral[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  addMarker(event: google.maps.MapMouseEvent) {
    // this.markerOptions.shape = { coords: [1, 1, 1, 20, 18, 20, 18, 1], type: "poly" }
    console.log(event);
    if (event.latLng)
      this.center = event.latLng.toJSON();
    console.log(this.center);
    if (this.markerOptions.label === 'helper') {
      this.markerOptions.label = 'client';

    }
    else {
      this.markerOptions.label = 'helper';
    }
    this.markerPositions.push(this.center);
  }
}
