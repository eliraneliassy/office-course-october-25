import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  Input,
  input,
  output,
} from '@angular/core';


@Component({
  selector: 'lib-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  text = input.required<string>();

  clickhandler = output<void>();

  click() {
    this.clickhandler.emit();
  }
}
