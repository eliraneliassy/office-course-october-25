import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Inject,
  inject,
  input,
  Input,
  TemplateRef,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'lib-slider',
  imports: [NgTemplateOutlet],
  templateUrl: './slider.html',
  styleUrl: './slider.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Slider implements AfterViewInit {
  slides = input.required<string[]>();

  slidesTemplate = input.required<TemplateRef<any> | any>();

  slidesPositions: number[] = [];
  currentSlide = 0;

  document = inject(DOCUMENT);

  ngAfterViewInit(): void {
    this.slidesPositions = [];
    this.document
      .querySelectorAll<HTMLDivElement>('.slide')
      .forEach((div: HTMLDivElement) =>
        this.slidesPositions.push(div.offsetLeft)
      );
  }

  slide(direction: number) {

    this.currentSlide += direction;

    if (this.currentSlide > this.slides.length - 1) {
      this.currentSlide = 0;
    }

    if (this.currentSlide < 0) {
      this.currentSlide = this.slide.length - 1;
    }

    this.document.querySelector('.slider')?.scrollTo({
      left: this.slidesPositions[this.currentSlide],
      behavior: 'smooth',
    });
  }

  nav = {
    next: () => this.slide( 1),
    prev: () => this.slide( -1),
  }
}
