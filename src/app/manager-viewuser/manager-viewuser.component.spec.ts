import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewuserComponent } from './manager-viewuser.component';

describe('ManagerViewuserComponent', () => {
  let component: ManagerViewuserComponent;
  let fixture: ComponentFixture<ManagerViewuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerViewuserComponent]
    });
    fixture = TestBed.createComponent(ManagerViewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
