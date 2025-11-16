import { computed, Injectable, Signal, signal } from '@angular/core';
import { Book } from '@office/books';

@Injectable({
  providedIn: 'root'
})
export class CartState {

  // private cart$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  private cart = signal<Book[]>([]);

  getCart(): Signal<Book[]>  {
    return this.cart.asReadonly(); // computed(() => this.cart());
  }

  addToCart(book: Book) {
    // this.cart.push(book);
    this.cart.update(prev => [...prev, {...book}]);
  }

  removeFromCart(book: Book) {
    // this.cart = this.cart.filter(item => item !== book);
    this.cart.update(prev => {
      const index = prev.indexOf(book);
      if (index > -1) {
        return prev.splice(index, 1);
      }

      return prev;
    })
  }

  numberOfItemsInCart(): Signal<number> {
    return computed(() => this.cart().length)
  }

}
