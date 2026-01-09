import { Routes } from '@angular/router';
import { authGuard } from '../core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/parcels',
    pathMatch: 'full',
  },
  {
    path: 'parcels',
    loadComponent: () => import('../features/parcels/parcels').then(m => m.Parcels),
  },
  {
    path: 'works',
    loadComponent: () => import('../features/works/works').then(m => m.Works),
  },
  {
    path: 'users',
    loadChildren: () => import('../features/user-management/user-management.routes').then(m => m.userRoutes),
    canActivate: [authGuard],
  },
  {
    path: 'profile',
    loadComponent: () => import('../features/profile/profile').then(m => m.Profile),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('../features/auth/login/login').then(m => m.Login),
  },
  {
    path: '**',
    loadComponent: () => import('../shared/ui/not-found/not-found').then(m => m.NotFound),
  },
];
