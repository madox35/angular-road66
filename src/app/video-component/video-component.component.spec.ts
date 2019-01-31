import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoComponentComponent } from './video-component.component';

describe('VideoComponentComponent', () => {
  let component: VideoComponentComponent;
  let fixture: ComponentFixture<VideoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a video tag',() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("video")).toBeTruthy();
  });

  it('video should have all sources', () => {
    const compiled = fixture.debugElement.nativeElement;
    const sources = compiled.querySelector("video").querySelectorAll("source");
    sources.forEach(function (currentValue, currentIndex, listObj) {
      expect(currentValue.type).toMatch(/video\/mp4|video\/ogg/);
    });
  }); 
});
