import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';
import { CommandPaletteComponent } from '../../shared/components/command-palette/command-palette.component';
@Component({ selector: 'app-header', standalone: true, imports: [RouterLink, RouterLinkActive, ThemeToggleComponent, CommandPaletteComponent], templateUrl: './header.component.html', styleUrl: './header.component.scss' })
export class HeaderComponent {
  open = signal(false);
  links = [{ path: '/', label: 'Home' }, { path: '/about', label: 'About' }, { path: '/projects', label: 'Projects' }, { path: '/skills', label: 'Skills' }, { path: '/angular-lab', label: 'Angular Lab' }, { path: '/dashboard', label: 'Dashboard' }, { path: '/notes', label: 'Notes' }, { path: '/contact', label: 'Contact' }];
  toggleMenu(): void { this.open.update(v => !v); }
  closeMenu(): void { this.open.set(false); }
}
