import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewcancelregComponent } from './manager-viewcancelreg.component';

describe('ManagerViewcancelregComponent', () => {
  let component: ManagerViewcancelregComponent;
  let fixture: ComponentFixture<ManagerViewcancelregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerViewcancelregComponent]
    });
    fixture = TestBed.createComponent(ManagerViewcancelregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
