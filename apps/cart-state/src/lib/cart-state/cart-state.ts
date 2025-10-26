import { Injectable } from '@angular/core';
import { Book } from '@office/books';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartState {

  private cart$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);


  getCart() {
    return this.cart$.asObservable();
  }

  addToCart(book: Book) {
    // this.cart.push(book);
    const currentCart = this.cart$.value;
    this.cart$.next([...currentCart, book]);
  }

  removeFromCart(book: Book) {
    // this.cart = this.cart.filter(item => item !== book);
  }

  numberOfItemsInCart(): Observable<number> {
    return this.cart$.pipe(
      map((cart) => cart.length)
    )
  }

}
