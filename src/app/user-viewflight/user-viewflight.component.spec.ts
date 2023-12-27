import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewflightComponent } from './user-viewflight.component';

describe('UserViewflightComponent', () => {
  let component: UserViewflightComponent;
  let fixture: ComponentFixture<UserViewflightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserViewflightComponent]
    });
    fixture = TestBed.createComponent(UserViewflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
