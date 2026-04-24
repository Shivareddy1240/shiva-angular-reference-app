import { Component, input, output } from '@angular/core';
import { Project } from '../../../core/models/portfolio.models';
import { HighlightDirective } from '../../directives/highlight.directive';
@Component({ selector: 'app-project-card', standalone: true, imports: [HighlightDirective], templateUrl: './project-card.component.html', styleUrl: './project-card.component.scss' })
export class ProjectCardComponent { project = input.required<Project>(); favorite = input(false); favoriteChange = output<number>(); toggleFavorite(): void { this.favoriteChange.emit(this.project().id); } }
