import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewedListComponent } from './user-viewed-list.component';

describe('UserViewedListComponent', () => {
  let component: UserViewedListComponent;
  let fixture: ComponentFixture<UserViewedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserViewedListComponent],
    });
    fixture = TestBed.createComponent(UserViewedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
