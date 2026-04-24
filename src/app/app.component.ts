import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';
import { ToastContainerComponent } from './shared/components/toast-container/toast-container.component';
import { AppModalComponent } from './shared/components/app-modal/app-modal.component';
@Component({ selector: 'app-root', standalone: true, imports: [RouterOutlet, ShellComponent, ToastContainerComponent, AppModalComponent], templateUrl: './app.component.html', styleUrl: './app.component.scss' })
export class AppComponent {}
