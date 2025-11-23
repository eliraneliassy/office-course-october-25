import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Input,
  model,
  Output,
} from '@angular/core';
import { User } from './user';

@Component({
  selector: 'lib-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Users {
  users = input<User[]>()

  selectedUser = model<User>()

  select(user: User) {
    this.selectedUser.set(user);
  }
}
