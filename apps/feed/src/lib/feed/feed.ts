import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FeedService } from '../feed-service';
import { AsyncPipe } from '@angular/common';
import { Book, BookComponent } from '@office/books';
import { CartState } from '@office/cart-state';

@Component({
  selector: 'lib-feed',
  imports: [AsyncPipe, BookComponent],
  templateUrl: './feed.html',
  styleUrl: './feed.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Feed {
  feedService = inject(FeedService);
  cartState: CartState = inject(CartState);

  books$ = this.feedService.getBooks('Angular');

  addToCart(book: Book) {

    this.cartState.addToCart(book);
  }
}
