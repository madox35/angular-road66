import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class UnServiceService {

    private timestamp_bus = new Subject<number>();
    private chapitres_bus = new Subject<Chapitre>();
    private waypoints_bus = new Subject<Waypoint>();
    
    timestamp = this.timestamp_bus.asObservable();
    chapitres = this.chapitres_bus.asObservable();
    waypoints = this.waypoints_bus.asObservable();

    constructor() {}
    
    postTimestamp(timestamp: number){
      this.timestamp_bus.next(timestamp);
    }

    postChapitres(chapitre:Chapitre){
      this.chapitres_bus.next(chapitre);
    }
    
    postWaypoints(waypoints: Waypoint){
      this.waypoints_bus.next(waypoints);
    }
}

interface Chapitre {
  pos: number;
  title: string;
}

interface Waypoint {
  lat: number;
  lng: number;
  label: string;
  timestamp:number;
}
