import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
interface CommandItem { label: string; path: string; hint: string; }
@Component({ selector: 'app-command-palette', standalone: true, imports: [FormsModule], templateUrl: './command-palette.component.html', styleUrl: './command-palette.component.scss' })
export class CommandPaletteComponent {
  open = signal(false); query = signal('');
  commands: CommandItem[] = [
    { label: 'Home', path: '/', hint: 'Portfolio overview' }, { label: 'Projects', path: '/projects', hint: 'Project cards + favorites' }, { label: 'Skills', path: '/skills', hint: 'Pipes and filters' },
    { label: 'Angular Lab', path: '/angular-lab', hint: 'Angular feature demos' }, { label: 'Dashboard', path: '/dashboard', hint: 'Signals and localStorage' }, { label: 'Notes', path: '/notes', hint: 'Local CRUD demo' }, { label: 'Contact', path: '/contact', hint: 'Reactive forms' }
  ];
  filtered = computed(() => { const value = this.query().toLowerCase().trim(); return this.commands.filter(item => !value || `${item.label} ${item.hint}`.toLowerCase().includes(value)); });
  constructor(private readonly router: Router) {}
  toggle(): void { this.open.update(value => !value); }
  close(): void { this.open.set(false); this.query.set(''); }
  go(path: string): void { this.router.navigateByUrl(path); this.close(); }
}
