import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDinamicaComponent } from './session-dinamica.component';

describe('SessionDinamicaComponent', () => {
  let component: SessionDinamicaComponent;
  let fixture: ComponentFixture<SessionDinamicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionDinamicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionDinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
