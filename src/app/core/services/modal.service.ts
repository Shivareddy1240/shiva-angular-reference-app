import { Injectable, signal } from '@angular/core';
export interface ModalState { title: string; body: string; actionLabel?: string; }
@Injectable({ providedIn: 'root' })
export class ModalService { readonly modal = signal<ModalState | null>(null); open(state: ModalState): void { this.modal.set(state); } close(): void { this.modal.set(null); } }
