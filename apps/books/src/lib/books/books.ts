import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Book } from '../books.interface';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'lib-books',
  imports: [CurrencyPipe],
  templateUrl: './books.html',
  styleUrl: './books.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  @Input() book!: Book;
  @Output() addToCart = new EventEmitter<Book>();

  addToCartHandler() {
    this.addToCart.emit();
  }
}
