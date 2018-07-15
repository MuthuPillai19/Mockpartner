import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamemodeselectorComponent } from './gamemodeselector.component';

describe('GamemodeselectorComponent', () => {
  let component: GamemodeselectorComponent;
  let fixture: ComponentFixture<GamemodeselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamemodeselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamemodeselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
