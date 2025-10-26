import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Book } from '@office/books';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  http = inject(HttpClient);
  BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

  getBooks(query: string): Observable<Book[]> {
    let params = new HttpParams();
    params = params.append('q', query);

    return this.http.get<any>(`${this.BASE_URL}`, {params})
      .pipe(
        map((res: any) => res.items),
        map((items: any[]) =>
          items.map((item: any) => ({
            id: item.id,
            title: item.volumeInfo.title,
            description: item.volumeInfo.description,
            imageUrl: item.volumeInfo.imageLinks.thumbnail,
            price: item.volumeInfo.pageCount,
          }))
      ))
  }

}
