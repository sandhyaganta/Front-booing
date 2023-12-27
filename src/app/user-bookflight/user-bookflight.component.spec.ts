import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookflightComponent } from './user-bookflight.component';

describe('UserBookflightComponent', () => {
  let component: UserBookflightComponent;
  let fixture: ComponentFixture<UserBookflightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBookflightComponent]
    });
    fixture = TestBed.createComponent(UserBookflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
