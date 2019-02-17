import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChaptersComponentComponent } from './chapters-component.component';

import {HttpClientModule} from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 

describe('ChaptersComponentComponent', () => {
  let component: ChaptersComponentComponent;
  let fixture: ComponentFixture<ChaptersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,MatMenuModule,BrowserAnimationsModule],
      declarations: [ChaptersComponentComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaptersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
