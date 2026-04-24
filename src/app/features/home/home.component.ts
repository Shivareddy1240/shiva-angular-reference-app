import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { ModalService } from '../../core/services/modal.service';
import { ToastService } from '../../core/services/toast.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import { SkeletonCardComponent } from '../../shared/components/skeleton-card/skeleton-card.component';
@Component({ selector: 'app-home', standalone: true, imports: [RouterLink, SectionHeaderComponent, ProjectCardComponent, StatCardComponent, SkeletonCardComponent], templateUrl: './home.component.html', styleUrl: './home.component.scss' })
export class HomeComponent { data = inject(PortfolioDataService); modal = inject(ModalService); toast = inject(ToastService); openIntro(): void { this.modal.open({ title: 'Angular Reference Portfolio', body: 'This app is both a personal portfolio and a practical Angular reference solution covering routing, signals, forms, reusable UI, guards, resolvers and local state.', actionLabel: 'Explore' }); } toggleFavorite(projectId: number): void { this.data.toggleFavorite(projectId); this.toast.show('Favorite project updated', 'success'); } }
