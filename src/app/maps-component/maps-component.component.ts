import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

declare let L;

@Component({
  selector: 'app-maps-component',
  templateUrl: './maps-component.component.html',
  styleUrls: ['./maps-component.component.css']
})
export class MapsComponentComponent implements OnInit {
  lat:number
  lng:number
  waypoints: waypoint[] = []
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const map = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    this.http.get('./assets/chapters.json', {responseType:'json'}).subscribe(data => {
      data['Waypoints'].map(
        waypoint => this.waypoints.push({
        lat: Number(waypoint.lat),
        lng: Number(waypoint.lng),
        label:String(waypoint.label),
        timestamp:Number(waypoint.timestamp)
      }));

      this.lat = this.waypoints[0].lat;
      this.lng = this.waypoints[0].lng;

      this.waypoints.forEach(point => {
        var marker = L.marker([point.lat, point.lng]).addTo(map);
        marker.bindPopup(point.label);
      });
    });
  }

}

interface waypoint {
  lat: number;
  lng: number;
  label: string;
  timestamp:number;
}
