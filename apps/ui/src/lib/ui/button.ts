import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter, Output, Input
} from '@angular/core';


@Component({
  selector: 'lib-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  @Input() text = '';

  @Output() clickhandler = new EventEmitter<void>();
  click() {
    this.clickhandler.emit();
  }
}
