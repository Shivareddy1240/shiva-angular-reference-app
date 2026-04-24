import { Injectable, effect, signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
export type AppTheme = 'light' | 'dark';
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<AppTheme>(this.storage.read<AppTheme>('portfolio-theme', 'light'));
  constructor(private readonly storage: LocalStorageService) { effect(() => { const value = this.theme(); document.body.classList.toggle('dark', value === 'dark'); this.storage.write('portfolio-theme', value); }); }
  toggle(): void { this.theme.update(value => value === 'dark' ? 'light' : 'dark'); }
}
