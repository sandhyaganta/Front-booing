import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewprofileComponent } from './user-viewprofile.component';

describe('UserViewprofileComponent', () => {
  let component: UserViewprofileComponent;
  let fixture: ComponentFixture<UserViewprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserViewprofileComponent]
    });
    fixture = TestBed.createComponent(UserViewprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
