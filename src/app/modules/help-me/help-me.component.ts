import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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


  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showMale();
    }, 7000);

    // this.showWomen();
  }

  showMale() {
    this.toastr.toastrConfig.positionClass = "toast-top-center"
    this.toastr.success('!מישהו בדרך אליך ', '');
    setTimeout(() => {
      this.toastr.error('אירוע אלימות בקרבת מקום', '!שים לב');
    }, 10000)
  }
  showWomen() {
    this.toastr.toastrConfig.positionClass = "toast-top-center"
    this.toastr.success('תודה שהתחברת למערכת על מנת לעזור לחפים מפשע', 'שלום');
    setTimeout(() => {
      this.toastr.warning('אנא שמור/י על פרטיות המשתתפים,הפרה של חוקים אלה תביא לסילוק מהאתר', 'אזהרה');
    }, 10000)
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
