import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionExamComponent } from './session-exam.component';

describe('SessionExamComponent', () => {
  let component: SessionExamComponent;
  let fixture: ComponentFixture<SessionExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
