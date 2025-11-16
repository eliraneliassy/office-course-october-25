import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  inject,
  input,
  Input,
  model,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'lib-form-input',
  imports: [],
  templateUrl: './form-input.html',
  styleUrl: './form-input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   useExisting: forwardRef(() => FormInput),
    //   multi: true
    // },
    // {
    //   provide: NG_VALIDATORS,
    //   useExisting: forwardRef(() => FormInput),
    //   multi: true
    // }
  ]
})
export class FormInput implements ControlValueAccessor, Validator {

  type = input<'text' | 'password'>('text');
  name = input<string>();
  placeholder = input('');
  label = input('');
  disabled = model(false);
  isRequired = model(false);

  value = output<string>();


  input = viewChild.required<ElementRef>('input');


  onChange = (value: string) => {

  }

  onBlur() {

  }

  controlDir = inject(NgControl);

  constructor() {
    this.controlDir.valueAccessor = this;

  }

  writeValue(obj: string): void {
    if(this.input()) {
      this.input().nativeElement.value = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onBlur = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  registerOnValidatorChange(fn: () => void): void {
  }


  validate(control: AbstractControl): ValidationErrors | null {
    if (this.isRequired() && (!control.value)) {
      return {'required': true};
    }

    return null;
  }



}

