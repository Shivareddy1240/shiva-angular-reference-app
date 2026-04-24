import { ErrorHandler, Injectable } from '@angular/core';
import { ToastService } from './toast.service';
@Injectable()
export class GlobalErrorHandler implements ErrorHandler { constructor(private readonly toast: ToastService) {} handleError(error: unknown): void { console.error(error); this.toast.show('Something went wrong. Check console for details.', 'error'); } }
