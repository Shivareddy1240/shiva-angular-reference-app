import { Injectable, computed, effect, signal } from '@angular/core';
import { Activity, BlogPost, Certification, ContactMessage, Experience, Note, Profile, Project, Skill } from '../models/portfolio.models';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  readonly profile: Profile = {
    name: 'Shiva Mudhireddy',
    role: 'Full Stack Developer | Angular | .NET | Flutter Enthusiast',
    location: 'India',
    email: 'shiva@example.com',
    summary: 'A practical developer portfolio built as an Angular learning reference, covering modern Angular architecture, UI patterns and real-world feature examples.',
    highlights: ['Clean architecture', 'Modern Angular', 'Signals state', 'GitHub-ready reference'],
    socials: [{ label: 'GitHub', url: 'https://github.com/' }, { label: 'LinkedIn', url: 'https://linkedin.com/' }, { label: 'Email', url: 'mailto:shiva@example.com' }]
  };

  readonly projects = signal<Project[]>([
    { id: 1, name: 'Lumen Diary', category: 'Flutter', description: 'Private digital diary concept with local-first storage and premium writing experience.', tech: ['Flutter', 'SharedPreferences', 'Local Storage'], impact: 'Privacy-first personal journaling app.', status: 'Prototype', featured: true },
    { id: 2, name: 'SmartSearch EF Core', category: '.NET', description: 'Reusable search package concept for EF Core with fuzzy and paginated search.', tech: ['C#', '.NET', 'EF Core'], impact: 'Reference-ready NuGet-style architecture.', status: 'Learning', featured: true },
    { id: 3, name: 'Angular Reference Portfolio', category: 'Angular', description: 'A modern portfolio that demonstrates the most-used Angular features with clean architecture.', tech: ['Angular', 'Signals', 'Routing', 'Forms'], impact: 'Learning + portfolio + GitHub reference.', status: 'Live', featured: true },
    { id: 4, name: 'Vendor Commerce Template', category: 'Product', description: 'Template idea for multiple small businesses to run branded storefronts from one mobile app.', tech: ['Flutter', 'Multi-tenant', 'UX'], impact: 'Reusable commerce foundation for small vendors.', status: 'Prototype', featured: false }
  ]);

  readonly skills = signal<Skill[]>([
    { name: 'Angular', category: 'Frontend', level: 90, years: 5 }, { name: 'TypeScript', category: 'Frontend', level: 88, years: 5 }, { name: 'C# / .NET', category: 'Backend', level: 92, years: 7 },
    { name: 'SQL', category: 'Database', level: 85, years: 7 }, { name: 'Flutter', category: 'Mobile', level: 78, years: 2 }, { name: 'Architecture', category: 'Engineering', level: 86, years: 6 }
  ]);

  readonly experience: Experience[] = [
    { company: 'Enterprise Projects', role: 'Full Stack Developer', period: 'Recent', points: ['Built scalable web application features.', 'Worked across UI, APIs, SQL and deployment workflows.', 'Focused on readable, maintainable and testable code.'] },
    { company: 'Personal Product Lab', role: 'App Builder', period: 'Ongoing', points: ['Exploring Flutter, Angular, .NET packages and real-world product ideas.', 'Creating GitHub-ready learning solutions.'] }
  ];

  readonly certifications: Certification[] = [
    { name: 'Angular Practical Learning Path', issuer: 'Self Learning', year: 2026, credential: 'Portfolio reference app' }, { name: '.NET Backend Architecture', issuer: 'Project Experience', year: 2026, credential: 'SmartSearch concept' }, { name: 'Flutter Product Prototyping', issuer: 'Personal Projects', year: 2026, credential: 'Lumen Diary prototype' }
  ];

  readonly blogs: BlogPost[] = [
    { title: 'Why Interfaces Matter in Decoupled Architecture', description: 'A simple explanation of dependency inversion with real examples.', tags: ['C#', 'SOLID'], readTime: '4 min', published: '2026-04-10' },
    { title: 'Angular Signals Explained Practically', description: 'How signals help manage local UI state without boilerplate.', tags: ['Angular', 'Signals'], readTime: '5 min', published: '2026-04-15' },
    { title: 'SQL Optimization: What to Use vs Avoid', description: 'Practical query optimization rules developers remember easily.', tags: ['SQL', 'Performance'], readTime: '6 min', published: '2026-04-18' }
  ];

  readonly activities: Activity[] = [
    { title: 'Released clean architecture version', description: 'Separated templates, styles and logic for maintainability.', date: '2026-04-24', type: 'Release' },
    { title: 'Added Angular Lab', description: 'Practical demos for forms, pipes, directives, lifecycle, RxJS and signals.', date: '2026-04-23', type: 'Learning' },
    { title: 'Published portfolio project cards', description: 'Featured personal projects with consistent card layout.', date: '2026-04-22', type: 'Project' }
  ];

  readonly contactMessages = signal<ContactMessage[]>(this.storage.read<ContactMessage[]>('portfolio-contact-messages', []));
  readonly favoriteProjectIds = signal<number[]>(this.storage.read<number[]>('portfolio-favorites', []));
  readonly notes = signal<Note[]>(this.storage.read<Note[]>('portfolio-notes', []));
  readonly featuredProjects = computed(() => this.projects().filter(p => p.featured));
  readonly favoriteProjects = computed(() => this.projects().filter(p => this.favoriteProjectIds().includes(p.id)));
  readonly totalSkillScore = computed(() => Math.round(this.skills().reduce((a, s) => a + s.level, 0) / this.skills().length));
  readonly projectCategories = computed(() => ['All', ...Array.from(new Set(this.projects().map(project => project.category)))]);

  constructor(private readonly storage: LocalStorageService) {
    effect(() => this.storage.write('portfolio-contact-messages', this.contactMessages()));
    effect(() => this.storage.write('portfolio-favorites', this.favoriteProjectIds()));
    effect(() => this.storage.write('portfolio-notes', this.notes()));
  }

  addProject(project: Project): void { this.projects.update(items => [project, ...items]); }
  addMessage(message: ContactMessage): void { this.contactMessages.update(items => [message, ...items]); }
  toggleFavorite(projectId: number): void { this.favoriteProjectIds.update(ids => ids.includes(projectId) ? ids.filter(id => id !== projectId) : [...ids, projectId]); }
  isFavorite(projectId: number): boolean { return this.favoriteProjectIds().includes(projectId); }
  addNote(title: string, body: string): void { this.notes.update(items => [{ id: crypto.randomUUID(), title, body, createdAt: new Date().toISOString() }, ...items]); }
  deleteNote(id: string): void { this.notes.update(items => items.filter(item => item.id !== id)); }
  exportSnapshot(): string { return JSON.stringify({ profile: this.profile, projects: this.projects(), skills: this.skills(), favorites: this.favoriteProjectIds(), notes: this.notes(), contactMessages: this.contactMessages() }, null, 2); }
}
