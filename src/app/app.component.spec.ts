import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { VideoComponentComponent } from './video-component/video-component.component';

import {ChaptersComponentComponent} from "./chapters-component/chapters-component.component";
import {HttpClientModule} from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatMenuModule, BrowserAnimationsModule],
      declarations: [AppComponent, VideoComponentComponent, ChaptersComponentComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'YouTube Next Generation'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('YouTube Next Generation');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('YouTube Next Generation :)');
  });
});
