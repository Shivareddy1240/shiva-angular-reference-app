import { HttpInterceptorFn } from '@angular/common/http';
export const demoInterceptor: HttpInterceptorFn = (req, next) => next(req.clone({ setHeaders: { 'X-Angular-Reference-App': 'true' } }));
