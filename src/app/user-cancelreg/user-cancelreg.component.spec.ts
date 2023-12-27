import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCancelregComponent } from './user-cancelreg.component';

describe('UserCancelregComponent', () => {
  let component: UserCancelregComponent;
  let fixture: ComponentFixture<UserCancelregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCancelregComponent]
    });
    fixture = TestBed.createComponent(UserCancelregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
