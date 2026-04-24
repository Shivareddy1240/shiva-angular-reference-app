import { Component, computed, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { ToastService } from '../../core/services/toast.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import { RoleOnlyDirective } from '../../shared/directives/role-only.directive';
@Component({ selector: 'app-dashboard', standalone: true, imports: [SectionHeaderComponent, StatCardComponent, RoleOnlyDirective], templateUrl: './dashboard.component.html', styleUrl: './dashboard.component.scss' })
export class DashboardComponent { data = inject(PortfolioDataService); toast = inject(ToastService); exportText = computed(() => this.data.exportSnapshot()); copyExport(): void { navigator.clipboard?.writeText(this.exportText()); this.toast.show('Portfolio JSON copied', 'success'); } }
