import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionGraphsComponent } from './session-graphs.component';

describe('SessionGraphsComponent', () => {
  let component: SessionGraphsComponent;
  let fixture: ComponentFixture<SessionGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
