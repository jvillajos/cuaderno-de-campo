import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/data/auth.service';

/**
 * Application header component
 * Features:
 * - Responsive navigation
 * - User authentication state
 * - Signal-based reactivity
 */
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  authService = inject(AuthService);
  private router = inject(Router);

  logout(): void {
    console.log("logout.");
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  goToLogin(): void {
    debugger;
    this.router.navigate(['/login']);
  }
}
