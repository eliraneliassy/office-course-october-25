import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserPostsLayout } from './user-posts-layout';

describe('UserPostsLayout', () => {
  let component: UserPostsLayout;
  let fixture: ComponentFixture<UserPostsLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPostsLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPostsLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
