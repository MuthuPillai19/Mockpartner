import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerapipanelComponent } from './playerapipanel.component';

describe('PlayerapipanelComponent', () => {
  let component: PlayerapipanelComponent;
  let fixture: ComponentFixture<PlayerapipanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerapipanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerapipanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
