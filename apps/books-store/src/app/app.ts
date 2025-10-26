import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartState } from '@office/cart-state';
import { AsyncPipe } from '@angular/common';


@Component({
  imports: [RouterOutlet, RouterLink, AsyncPipe],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  cartState = inject(CartState);
  numberOfItems$ = this.cartState.numberOfItemsInCart();
}
