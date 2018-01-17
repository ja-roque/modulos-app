import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDocComponent } from './session-doc.component';

describe('SessionDocComponent', () => {
  let component: SessionDocComponent;
  let fixture: ComponentFixture<SessionDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
