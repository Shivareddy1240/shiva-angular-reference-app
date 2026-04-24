import { Component, input } from '@angular/core';
import { Skill } from '../../../core/models/portfolio.models';
import { ExperienceLabelPipe } from '../../pipes/experience-label.pipe';
@Component({ selector: 'app-skill-meter', standalone: true, imports: [ExperienceLabelPipe], templateUrl: './skill-meter.component.html', styleUrl: './skill-meter.component.scss' })
export class SkillMeterComponent { skill = input.required<Skill>(); }
