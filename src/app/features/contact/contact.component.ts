import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators, NonNullableFormBuilder } from '@angular/forms';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { ToastService } from '../../core/services/toast.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
@Component({ selector: 'app-contact', standalone: true, imports: [ReactiveFormsModule, SectionHeaderComponent], templateUrl: './contact.component.html', styleUrl: './contact.component.scss' })
export class ContactComponent { private fb = inject(NonNullableFormBuilder); data = inject(PortfolioDataService); toast = inject(ToastService); form = this.fb.group({ name: ['', [Validators.required, Validators.minLength(2)]], email: ['', [Validators.required, Validators.email]], message: ['', [Validators.required, Validators.minLength(10)]] }); submit(): void { if (this.form.invalid) { this.form.markAllAsTouched(); this.toast.show('Please fix the form errors', 'warning'); return; } const value = this.form.getRawValue(); this.data.addMessage({ id: crypto.randomUUID(), ...value, createdAt: new Date().toISOString() }); this.form.reset(); this.toast.show('Message saved locally', 'success'); } }
