import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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

  cart: Book[] = [];

  constructor() {
    this.cart = this.cartState.getCart();
  }
}
