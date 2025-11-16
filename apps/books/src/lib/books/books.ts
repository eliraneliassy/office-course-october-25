import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Input, output,
  Output,
  signal,
} from '@angular/core';
import { Book } from '../books.interface';
import { CurrencyPipe } from '@angular/common';
import { Button } from '@office/ui';


@Component({
  selector: 'lib-books',
  imports: [CurrencyPipe, Button],
  templateUrl: './books.html',
  styleUrl: './books.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  book = input.required<Book>();
  addToCart = output<Book>();

  addToCartHandler() {
    this.addToCart.emit(this.book());
  }
}
