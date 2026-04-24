import { Injectable, signal } from '@angular/core';
import { ContactMessage } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class ContactService {
  readonly messages = signal<ContactMessage[]>([]);
  save(message: Omit<ContactMessage, 'createdAt'>): void {
    this.messages.update(list => [{ ...message, createdAt: new Date().toISOString() }, ...list]);
  }
}
