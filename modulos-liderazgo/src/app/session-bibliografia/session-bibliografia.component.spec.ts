import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionBibliografiaComponent } from './session-bibliografia.component';

describe('SessionBibliografiaComponent', () => {
  let component: SessionBibliografiaComponent;
  let fixture: ComponentFixture<SessionBibliografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionBibliografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionBibliografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
