import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject, linkedSignal, resource, ResourceRef,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { PostsService } from './posts';
import { Observable } from 'rxjs';
import { User } from './user';
import { Users } from './users';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Post } from './post';
import { UserComment } from './user-comment';
import { UserPosts } from './user-posts';
import { UserComments } from './user-comments';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-user-posts-layout',
  imports: [Users, UserPosts, UserComments],
  templateUrl: './user-posts-layout.html',
  styleUrl: './user-posts-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPostsLayout {
  postsService = inject(PostsService);

  users: ResourceRef<User[] | undefined> = // toSignal(this.postsService.getUsers());
    this.postsService.getUsers();

  posts = rxResource({
    params: () => this.selectedUser(),
    stream: ({ params: selectedUser }) =>
      this.postsService.getPosts(selectedUser.id),
  });
  // comments: WritableSignal<UserComment[]> = signal<UserComment[]>([]);
  comments: ResourceRef<UserComment[] | undefined> = resource({
    params: () => this.selectedPost(),
    loader: ({ params: selectedPost }) =>
      fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${selectedPost.id}`
      ).then((res) => res.json()),
  });

  selectedUser = signal<User | undefined>(undefined);
  selectedPost: WritableSignal<Post | undefined> = linkedSignal({
    source: () => this.selectedUser(),
    computation: () => undefined,
  });

  constructor() {
    // effect(() => {
    //   const selectedUser = this.selectedUser();
    //   if (selectedUser) {
    //     this.postsService
    //       .getPosts(selectedUser.id)
    //       .subscribe((posts: Post[]) => {
    //         this.posts.set(posts);
    //       });
    //   }
    // });
    // effect(() => {
    //   const selectedPost = this.selectedPost();
    //
    //   if(selectedPost) {
    //     this.postsService.getComments(selectedPost.id).subscribe((comments) => {
    //       this.comments.set(comments);
    //     })
    //   } else {
    //     this.comments.set([])
    //   }
    // });
  }
}
