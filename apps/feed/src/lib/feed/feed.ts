import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FeedService } from '../feed-service';
import { AsyncPipe } from '@angular/common';
import { BookComponent } from '@office/books';

@Component({
  selector: 'lib-feed',
  imports: [AsyncPipe, BookComponent],
  templateUrl: './feed.html',
  styleUrl: './feed.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Feed {
  feedService = inject(FeedService);

  books$ = this.feedService.getBooks('Angular');
}
