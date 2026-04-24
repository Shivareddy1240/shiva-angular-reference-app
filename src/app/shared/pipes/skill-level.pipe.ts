import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'skillLevel', standalone: true })
export class SkillLevelPipe implements PipeTransform {
  transform(level: number): string {
    if (level >= 85) return 'Advanced';
    if (level >= 70) return 'Strong';
    if (level >= 50) return 'Intermediate';
    return 'Learning';
  }
}
