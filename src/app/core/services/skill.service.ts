import { Injectable, computed, signal } from '@angular/core';
import { Skill } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class SkillService {
  readonly skills = signal<Skill[]>([
    { name: 'Angular', category: 'Frontend', level: 88, featured: true },
    { name: 'TypeScript', category: 'Frontend', level: 85, featured: true },
    { name: '.NET Core', category: 'Backend', level: 86, featured: true },
    { name: 'Flutter', category: 'Mobile', level: 82, featured: true },
    { name: 'SQL Optimization', category: 'Backend', level: 80, featured: false },
    { name: 'Product Thinking', category: 'Soft Skill', level: 84, featured: true }
  ]);
  readonly averageLevel = computed(() => Math.round(this.skills().reduce((a, s) => a + s.level, 0) / this.skills().length));
}
