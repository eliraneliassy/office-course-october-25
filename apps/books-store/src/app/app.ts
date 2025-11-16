import { Component, computed, effect, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartState } from '@office/cart-state';
import { AsyncPipe } from '@angular/common';


@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  cartState = inject(CartState);
  numberOfItems = this.cartState.numberOfItemsInCart();

  // counter = signal(0);
  //
  // isEven = computed(() => this.counter() % 2 === 0);
  //
  // increment () {
  //   this.counter.update(prev => prev+1);
  // }
  //
  // reset() {
  //   this.counter.set(0)
  // }
  //
  // constructor() {
  //   effect(() => console.log('COUNTER CHANGED:', this.counter()))
  // }
}
