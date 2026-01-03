import { Component, forwardRef, input, output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Input),
      multi: true,
    },
  ],
})
export class Input {
  type = input<'text' | 'email' | 'password' | 'number' | 'tel' | 'url'>('text');
  placeholder = input<string>('');
  disabled = input(false);
  hasError = input(false);
  ariaDescribedBy = input<string>();
  value = input<string>('');

  inputChange = output<string>();
  inputBlur = output<void>();
  inputFocus = output<void>();

  internalValue = '';

  private onChange = (_value: string) => {};
  private onTouched = () => {};

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.internalValue = target.value;
    this.onChange(this.internalValue);
    this.inputChange.emit(this.internalValue);
  }

  handleBlur() {
    this.onTouched();
    this.inputBlur.emit();
  }

  handleFocus() {
    this.inputFocus.emit();
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.internalValue = value || '';
  }

  registerOnChange(fn: (_value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(_isDisabled: boolean): void {
    // Handled by signal input
  }
}
