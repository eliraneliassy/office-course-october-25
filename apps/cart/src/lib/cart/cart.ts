import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartState } from '@office/cart-state';
import { Book, BookComponent } from '@office/books';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'lib-cart',
  imports: [BookComponent, AsyncPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cart {
  cartState = inject(CartState);

  cart$: Observable<Book[]> = this.cartState.getCart();
}
