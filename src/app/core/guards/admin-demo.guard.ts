import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const canViewAdminDemo: CanActivateFn = () => {
  const router = inject(Router);
  const allowed = confirm('Guard demo: allow navigation to admin demo?');
  return allowed || router.createUrlTree(['/']);
};
