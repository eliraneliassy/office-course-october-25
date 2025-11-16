import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import { FeedService } from '../feed-service';
import { AsyncPipe } from '@angular/common';
import { Book, BookComponent } from '@office/books';
import { CartState } from '@office/cart-state';
import { FormInput } from '@office/ui';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  of,
  Subject,
  switchMap,
} from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-feed',
  imports: [BookComponent],
  templateUrl: './feed.html',
  styleUrl: './feed.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Feed {
  feedService = inject(FeedService);
  cartState: CartState = inject(CartState);

  books!: Signal<Book[] | never[] | undefined>;

  search$: Subject<string> = new Subject();

  constructor() {

    this.books =
      toSignal(this.search$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((value: string) =>
        this.feedService.getBooks(value)
          .pipe(
            catchError(() => {
              return of([])
            })
          )
      ),
    ))
  }

  addToCart(book: Book) {
    this.cartState.addToCart(book);
  }

  search(value: string) {
    this.search$.next(value);
  }
}
