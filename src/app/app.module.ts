import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoComponentComponent } from './video-component/video-component.component';
import { ChaptersComponentComponent } from './chapters-component/chapters-component.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponentComponent,
    ChaptersComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
