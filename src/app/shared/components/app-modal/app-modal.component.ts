import { Component, inject } from '@angular/core';
import { ModalService } from '../../../core/services/modal.service';
@Component({ selector: 'app-modal', standalone: true, templateUrl: './app-modal.component.html', styleUrl: './app-modal.component.scss' })
export class AppModalComponent { modal = inject(ModalService); }
