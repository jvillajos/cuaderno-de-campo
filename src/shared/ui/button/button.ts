import { Component, input, output } from '@angular/core';

@Component({
  selector: 'button[app-button]',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  host: {
    '[attr.type]': 'type()',
    '[class.primary]': 'variant() === "primary"',
    '[class.secondary]': 'variant() === "secondary"',
    '[class.danger]': 'variant() === "danger"',
    '[class.small]': 'size() === "small"',
    '[class.large]': 'size() === "large"',
    '[disabled]': 'disabled()',
    '[attr.aria-label]': 'ariaLabel()',
    '(click)': 'handleClick($event)',
  }
})
export class Button {
  variant = input<'primary' | 'secondary' | 'danger'>('secondary');
  size = input<'small' | 'medium' | 'large'>('medium');
  disabled = input(false);
  ariaLabel = input<string>();
  type = input<'button' | 'submit' | 'reset'>('button');

  buttonClick = output<Event>();

  handleClick(event: Event) {
    if (this.disabled()) {
      event.preventDefault();
      return;
    }
    this.buttonClick.emit(event);
  }
}

