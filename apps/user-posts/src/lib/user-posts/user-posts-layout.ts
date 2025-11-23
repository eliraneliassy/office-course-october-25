import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PostsService } from './posts';
import { Observable } from 'rxjs';
import { User } from './user';
import { Users } from './users';
import { AsyncPipe } from '@angular/common';
import { Post } from './post';
import { UserComment } from './user-comment';
import { UserPosts } from './user-posts';
import { UserComments } from './user-comments';

@Component({
  selector: 'lib-user-posts-layout',
  imports: [Users, AsyncPipe, UserPosts, UserComments],
  templateUrl: './user-posts-layout.html',
  styleUrl: './user-posts-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPostsLayout {
  postsService = inject(PostsService);

  users$: Observable<User[]> = this.postsService.getUsers();

  posts$!: Observable<Post[]>;
  comments$!: Observable<UserComment[]>;

  selectedUser(user: User) {
    this.posts$ = this.postsService.getPosts(user.id);
  }

  selectedPost(post: Post) {
    this.comments$ = this.postsService.getComments(post.id);
  }
}
