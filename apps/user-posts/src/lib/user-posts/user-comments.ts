import {
  ChangeDetectionStrategy,
  Component,
  input,
  Input,
} from '@angular/core';
import { UserComment } from './user-comment';

@Component({
  selector: 'lib-user-comments',
  imports: [],
  templateUrl: './user-comments.html',
  styleUrl: './user-comments.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComments {
  comments = input<UserComment[] | undefined>();
}
