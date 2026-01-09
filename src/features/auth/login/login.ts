import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
//import { NotificationService } from '@shared/data/notification';
import { Button } from '../../../shared/ui/button/button';
import { Field } from '../../../shared/ui/field/field';
import { AuthService } from '../../../shared/data';

@Component({
  selector: 'app-login',
  imports: [Field, ReactiveFormsModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  //private notificationService = inject(NotificationService);

  isSubmitting = signal(false);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  changeValue(val: string, control: AbstractControl): void {
    control.setValue(val);
    control.markAsTouched();
  }

  async handleSubmit(): Promise<void> {
    if (this.loginForm.invalid || this.isSubmitting()) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    try {
      const { email, password } = this.loginForm.value;
      const success = await this.authService.login(email!, password!);

      if (success) {
        //this.notificationService.showSuccess('Welcome back!');
        this.router.navigate(['/dashboard']);
      } else {
        //this.notificationService.showError('Invalid email or password');
      }
    } catch (_error) {
      //this.notificationService.showError('Login failed. Please try again.');
    } finally {
      this.isSubmitting.set(false);
    }
  }

  getFieldError(fieldName: string): string | undefined {
    const field = this.loginForm.get(fieldName);

    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${field.errors['minlength'].requiredLength} characters`;
      }
    }

    return undefined;
  }
}
