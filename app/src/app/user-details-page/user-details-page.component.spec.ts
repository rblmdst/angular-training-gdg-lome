import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsPageComponent } from './user-details-page.component';

describe('UserDetailsPageComponent', () => {
  let component: UserDetailsPageComponent;
  let fixture: ComponentFixture<UserDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserDetailsPageComponent]
    });
    fixture = TestBed.createComponent(UserDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
