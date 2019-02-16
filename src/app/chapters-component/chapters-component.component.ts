import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnServiceService } from '../un-service.service'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chapters-component',
  templateUrl: './chapters-component.component.html',
  styleUrls: ['./chapters-component.component.css']
})
export class ChaptersComponentComponent implements OnInit {

  chapitres: JSON
  @Output() onChapitre = new EventEmitter<number>();

  constructor(private http: HttpClient, private service:UnServiceService) { }

  ngOnInit() {
    this.http.get('./assets/chapters.json', {responseType:'json'}).subscribe(data => {

      this.chapitres = data['Chapters'];     
      for (let i = 0; i < data['Chapters'].length; i++) {   
        this.service.postChapitres(data['Chapters'][i]);
      }

      for (let i = 0; i < data['Waypoints'].length; i++) {
        this.service.postWaypoints(data['Waypoints'][i]);
      }
    });
  }

  onSelect(chapitre){
    this.service.postTimestamp(chapitre.pos);
  }
}
