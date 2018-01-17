import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionSlideshowComponent } from './session-slideshow.component';

describe('SessionSlideshowComponent', () => {
  let component: SessionSlideshowComponent;
  let fixture: ComponentFixture<SessionSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
