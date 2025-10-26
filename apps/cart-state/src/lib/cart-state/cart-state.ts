import { Injectable } from '@angular/core';
import { Book } from '@office/books';

@Injectable({
  providedIn: 'root'
})
export class CartState {

  private cart: Book[] = [];

  getCart() {
    return this.cart;
  }

  addToCart(book: Book) {
    this.cart.push(book);
  }

  removeFromCart(book: Book) {
    this.cart = this.cart.filter(item => item !== book);
  }

  numberOfItemsInCart() {
    return this.cart.length;
  }

}
