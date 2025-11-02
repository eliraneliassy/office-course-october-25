import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-form-input',
  imports: [],
  templateUrl: './form-input.html',
  styleUrl: './form-input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInput),
      multi: true
    }
  ]
})
export class FormInput implements ControlValueAccessor {

  @Input() type: 'text' | 'password' = 'text';

  @Input() name?: string;

  @Input() placeholder = '';

  @Input() label = '';

  @Input() disabled = false;

  @Output() value = new EventEmitter<string>();

  @ViewChild('input') input?: ElementRef;

  onChange = (value: string) => {

  }

  onBlur() {

  }

  writeValue(obj: string): void {
    if(this.input) {
      this.input.nativeElement.value = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onBlur = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }



}

