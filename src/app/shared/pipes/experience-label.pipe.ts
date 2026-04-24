import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'experienceLabel', standalone: true })
export class ExperienceLabelPipe implements PipeTransform { transform(years: number): string { if (years >= 7) return `${years}+ yrs • senior`; if (years >= 3) return `${years}+ yrs • strong`; return `${years}+ yrs • growing`; } }
