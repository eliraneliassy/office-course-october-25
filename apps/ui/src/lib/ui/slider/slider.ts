import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DOCUMENT, Inject,
  inject,
  Input,
} from '@angular/core';

@Component({
  selector: 'lib-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Slider implements AfterViewInit {


  @Input() slides: string[] = [];

  slidesPositions: number[] = [];
  currentSlide = 0;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngAfterViewInit(): void {
    this.slidesPositions = [];
    this.document.querySelectorAll<HTMLDivElement>('.slide')
      .forEach((div: HTMLDivElement) =>
        this.slidesPositions.push(div.offsetLeft))
  }

  slide(direction: number) {
    debugger
    this.currentSlide += direction;

    if(this.currentSlide > this.slides.length - 1) {
      this.currentSlide = 0;
    }

    if(this.currentSlide < 0) {
      this.currentSlide = this.slide.length - 1;
    }

    this.document.querySelector('.slider')?.scrollTo({
      left: this.slidesPositions[this.currentSlide],
      behavior: 'smooth',
    })
  }
}
