import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerconfigpanelComponent } from './playerconfigpanel.component';

describe('PlayerconfigpanelComponent', () => {
  let component: PlayerconfigpanelComponent;
  let fixture: ComponentFixture<PlayerconfigpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerconfigpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerconfigpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
