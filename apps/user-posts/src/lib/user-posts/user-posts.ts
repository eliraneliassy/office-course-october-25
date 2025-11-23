import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
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
  @Input() posts: Post[] | null = [];

  @Output() selectedPost: EventEmitter<Post> = new EventEmitter();

  select(post: Post) {
    this.selectedPost.emit(post);
  }
}
