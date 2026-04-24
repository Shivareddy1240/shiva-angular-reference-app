import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { ToastService } from '../../core/services/toast.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
@Component({ selector: 'app-notes', standalone: true, imports: [FormsModule, DatePipe, SectionHeaderComponent], templateUrl: './notes.component.html', styleUrl: './notes.component.scss' })
export class NotesComponent { data = inject(PortfolioDataService); toast = inject(ToastService); title = ''; body = ''; add(): void { if (!this.title.trim() || !this.body.trim()) { this.toast.show('Add title and note body', 'warning'); return; } this.data.addNote(this.title.trim(), this.body.trim()); this.title = ''; this.body = ''; this.toast.show('Note added', 'success'); } delete(id: string): void { this.data.deleteNote(id); this.toast.show('Note deleted', 'info'); } }
