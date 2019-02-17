import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnServiceService } from '../un-service.service'; 
import { Subscription } from 'rxjs';

declare let L;

@Component({
  selector: 'app-maps-component',
  templateUrl: './maps-component.component.html',
  styleUrls: ['./maps-component.component.css']
})
export class MapsComponentComponent implements OnInit {
  lat:number
  lng:number

  waypoints: Subscription;

  constructor(private http: HttpClient, private service:UnServiceService) { }

  ngOnInit() {
    const map = L.map('mapid').setView([39.02475,-106.075712], 3);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    this.waypoints = this.service.waypoints.subscribe(
      waypoints => {
        let marker = L.marker([waypoints.lat, waypoints.lng]).addTo(map);
        marker.bindPopup(waypoints.label);
      }
    );
  }

  ngOnDestroy(){
    this.waypoints.unsubscribe();
  }
}
