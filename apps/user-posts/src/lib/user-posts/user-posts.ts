import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Input,
  model,
  Output,
} from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'lib-user-posts',
  imports: [],
  templateUrl: './user-posts.html',
  styleUrl: './user-posts.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPosts {
  posts = input<Post[] | undefined>([]);

  selectedPost = model<Post>();

  select(post: Post) {
    this.selectedPost.set(post);
  }
}
