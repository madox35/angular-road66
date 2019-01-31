import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chapters-component',
  templateUrl: './chapters-component.component.html',
  styleUrls: ['./chapters-component.component.css']
})
export class ChaptersComponentComponent implements OnInit {

  chapitres: JSON;
  @Output() onChapitre = new EventEmitter<number>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/chapters.json', {responseType:'json'}).subscribe(data => {
      this.chapitres = data['Chapters'];
    });
  }

  onSelect(chapitre){
    this.onChapitre.emit(chapitre.pos);
  } 
}
