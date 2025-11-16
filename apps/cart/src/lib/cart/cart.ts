import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import { CartState } from '@office/cart-state';
import { Book, BookComponent } from '@office/books';


@Component({
  selector: 'lib-cart',
  imports: [BookComponent],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cart {
  cartState = inject(CartState);

  cart: Signal<Book[]> = this.cartState.getCart();
}
