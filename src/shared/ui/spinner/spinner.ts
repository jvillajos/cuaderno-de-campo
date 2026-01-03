import { Component, input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  imports: [],
  templateUrl: './spinner.html',
  styleUrl: './spinner.scss',
  host: {
    '[class.small]': 'size() === "small"',
    '[class.large]': 'size() === "large"',
    '[class.white]': 'color() === "white"',
  }
})
export class Spinner {
  size = input<'small' | 'medium' | 'large'>('medium');
  color = input<'primary' | 'white'>('primary');
  text = input('Loading...');
  showText = input(false);
  ariaLabel = input('Loading');
}
