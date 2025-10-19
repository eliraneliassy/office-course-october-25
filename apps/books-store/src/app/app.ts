import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { Book, BookComponent } from '@office/books';

@Component({
  imports: [BookComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  book: Book = {
    title: 'Harry Potter',
    description: '',
    price: 100,
    imageUrl: 'http://books.google.com/books/content?id=abYKXvCwEToC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    id: '1'
}
}
