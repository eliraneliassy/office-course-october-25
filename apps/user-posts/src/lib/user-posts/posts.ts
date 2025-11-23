import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Post } from './post';
import { UserComment } from './user-comment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  http = inject(HttpClient);
  BASE_URL = 'https://jsonplaceholder.typicode.com/';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/users`);
  }

  getPosts(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BASE_URL}/posts?usersId=${userId}`);
  }

  getComments(postId: number): Observable<UserComment[]> {
    return this.http.get<UserComment[]>(`${this.BASE_URL}/comments?postId=${postId}`);
  }
}
