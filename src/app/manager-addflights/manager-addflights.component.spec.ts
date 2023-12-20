import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddflightsComponent } from './manager-addflights.component';

describe('ManagerAddflightsComponent', () => {
  let component: ManagerAddflightsComponent;
  let fixture: ComponentFixture<ManagerAddflightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerAddflightsComponent]
    });
    fixture = TestBed.createComponent(ManagerAddflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
