import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
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
  @Input() users: User[] | null = [];

  @Output() selectedUser: EventEmitter<User> = new EventEmitter();

  select(user: User) {
    this.selectedUser.emit(user);
  }
}
