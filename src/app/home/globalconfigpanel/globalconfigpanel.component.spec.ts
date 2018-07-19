import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalconfigpanelComponent } from './globalconfigpanel.component';

describe('GlobalconfigpanelComponent', () => {
  let component: GlobalconfigpanelComponent;
  let fixture: ComponentFixture<GlobalconfigpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalconfigpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalconfigpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
