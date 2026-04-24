import { Injectable, signal } from '@angular/core';
export type ToastType = 'success' | 'info' | 'warning' | 'error';
export interface Toast { id: number; message: string; type: ToastType; }
@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly toasts = signal<Toast[]>([]); private nextId = 1;
  show(message: string, type: ToastType = 'info'): void { const id = this.nextId++; this.toasts.update(items => [...items, { id, message, type }]); setTimeout(() => this.dismiss(id), 3200); }
  dismiss(id: number): void { this.toasts.update(items => items.filter(item => item.id !== id)); }
}
