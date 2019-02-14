import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { VideoComponentComponent } from './video-component/video-component.component';
import { ChaptersComponentComponent } from './chapters-component/chapters-component.component';
import { MapsComponentComponent } from './maps-component/maps-component.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponentComponent,
    ChaptersComponentComponent,
    MapsComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
