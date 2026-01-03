import { Component, input, output } from '@angular/core';
import { Input } from "../input/input";

@Component({
  selector: 'app-field',
  imports: [Input],
  templateUrl: './field.html',
  styleUrl: './field.scss',
})
export class Field {
  fieldId = input.required<string>();
  label = input<string>();
  type = input<'text' | 'email' | 'password' | 'number' | 'tel' | 'url'>('text');
  placeholder = input<string>('');
  disabled = input(false);
  required = input(false);
  errorMessage = input<string>();
  helpText = input<string>();

  valueChange = output<string>();
  fieldBlur = output<void>();
  fieldFocus = output<void>();
}
