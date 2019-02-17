import { Component, OnInit } from '@angular/core';
import { UnServiceService } from '../un-service.service'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-component',
  templateUrl: './video-component.component.html',
  styleUrls: ['./video-component.component.css']
})
export class VideoComponentComponent implements OnInit {
  url_mp4 = "https://archive.org/download/Route_66_-_an_American_badDream/Route_66_-_an_American_badDream.mp4";
  url_ogg = "https://archive.org/download/Route_66_-_an_American_badDream/Route_66_-_an_American_badDream.ogv";

  time = 0;
  timestamp: Subscription;

  constructor(private service:UnServiceService) { }
  ngOnInit() {
    this.timestamp = this.service.timestamp.subscribe(
      timestamp => {
        this.time = timestamp;
      }
    )
   }

  onChapterChange(pos:number){
    this.time = pos;
  }
}
