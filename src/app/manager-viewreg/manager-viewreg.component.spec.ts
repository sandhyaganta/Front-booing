import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewregComponent } from './manager-viewreg.component';

describe('ManagerViewregComponent', () => {
  let component: ManagerViewregComponent;
  let fixture: ComponentFixture<ManagerViewregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerViewregComponent]
    });
    fixture = TestBed.createComponent(ManagerViewregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
