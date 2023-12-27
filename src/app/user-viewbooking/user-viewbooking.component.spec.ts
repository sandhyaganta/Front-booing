import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewbookingComponent } from './user-viewbooking.component';

describe('UserViewbookingComponent', () => {
  let component: UserViewbookingComponent;
  let fixture: ComponentFixture<UserViewbookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserViewbookingComponent]
    });
    fixture = TestBed.createComponent(UserViewbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
