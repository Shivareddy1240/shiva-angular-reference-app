import { Injectable, computed, effect, signal } from '@angular/core';
import { Project } from '../models/portfolio.models';

const PROJECTS: Project[] = [
  { id: 1, name: 'Angular Reference Portfolio', category: 'Angular', description: 'This app itself: routing, services, signals, forms, pipes, directives and clean UI.', tags: ['Angular', 'Signals', 'Routing'], status: 'Live', impact: 'GitHub learning reference' },
  { id: 2, name: 'Lumen Diary', category: 'Flutter', description: 'Digital diary concept with local-first storage and calming UI.', tags: ['Flutter', 'Local Storage'], status: 'In Progress', impact: 'Personal journaling' },
  { id: 3, name: 'SmartSearch EFCore', category: '.NET', description: 'Reusable search package concept for EF Core apps.', tags: ['C#', 'EF Core', 'NuGet'], status: 'Live', impact: 'Developer productivity' },
  { id: 4, name: 'Children Learning App', category: 'Mobile', description: 'A playful app roadmap to help kids learn without YouTube distractions.', tags: ['Flutter', 'Education'], status: 'Planned', impact: 'Child learning' }
];

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private readonly storageKey = 'shiva-angular-projects';
  readonly projects = signal<Project[]>(this.load());
  readonly search = signal('');
  readonly selectedCategory = signal<'All' | Project['category']>('All');

  readonly filteredProjects = computed(() => {
    const text = this.search().toLowerCase();
    const category = this.selectedCategory();
    return this.projects().filter(p =>
      (category === 'All' || p.category === category) &&
      (p.name.toLowerCase().includes(text) || p.tags.some(t => t.toLowerCase().includes(text)))
    );
  });

  readonly liveCount = computed(() => this.projects().filter(p => p.status === 'Live').length);

  constructor() {
    effect(() => localStorage.setItem(this.storageKey, JSON.stringify(this.projects())));
  }

  addProject(project: Omit<Project, 'id'>): void {
    const nextId = Math.max(0, ...this.projects().map(p => p.id)) + 1;
    this.projects.update(items => [{ id: nextId, ...project }, ...items]);
  }

  private load(): Project[] {
    const saved = localStorage.getItem(this.storageKey);
    return saved ? JSON.parse(saved) as Project[] : PROJECTS;
  }
}
