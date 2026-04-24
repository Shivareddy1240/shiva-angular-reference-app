import { AfterViewInit, Component, ElementRef, computed, signal, viewChild } from '@angular/core';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, map } from 'rxjs';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { FeatureDemoCardComponent } from '../../shared/components/feature-demo-card/feature-demo-card.component';
import { CodePreviewComponent } from '../../shared/components/code-preview/code-preview.component';
import { RoleOnlyDirective } from '../../shared/directives/role-only.directive';
@Component({ selector: 'app-angular-lab', standalone: true, imports: [FormsModule, AsyncPipe, UpperCasePipe, SectionHeaderComponent, FeatureDemoCardComponent, CodePreviewComponent, RoleOnlyDirective], templateUrl: './angular-lab.component.html', styleUrl: './angular-lab.component.scss' })
export class AngularLabComponent implements AfterViewInit {
  name = 'Shiva'; clicks = signal(0); score = signal(70); doubledScore = computed(() => this.score() * 2); role = 'admin'; viewMessage = signal('Waiting for ViewChild...'); titleInput = viewChild<ElementRef<HTMLInputElement>>('titleInput');
  private rxCounter = new BehaviorSubject(1); rxValue$ = this.rxCounter.pipe(map(value => value * 10)); signalCode = `score = signal(70);\ndoubledScore = computed(() => this.score() * 2);`;
  ngAfterViewInit(): void { this.viewMessage.set(`ViewChild found input value: ${this.titleInput()?.nativeElement.value}`); }
  increaseClicks(): void { this.clicks.update(value => value + 1); }
  improveScore(): void { this.score.update(value => value + 10); }
  nextRx(): void { this.rxCounter.next(this.rxCounter.value + 1); }
}
