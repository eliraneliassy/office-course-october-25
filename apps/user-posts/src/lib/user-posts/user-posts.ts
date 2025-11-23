import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-user-posts',
  imports: [],
  templateUrl: './user-posts.html',
  styleUrl: './user-posts.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPosts {}
