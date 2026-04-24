import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({ selector: 'app-learning-lab', standalone: true, imports: [FormsModule, SectionHeaderComponent], template: `
<app-section-header title="Learning Lab" subtitle="Small demos for binding, control flow, signals and parent-child style thinking." />
<section class="grid two">
  <article class="card"><h3>Data Binding</h3><input [(ngModel)]="name" placeholder="Type your name"><p>Hello, <b>{{name || 'Angular Developer'}}</b></p><button class="btn ghost" (click)="incrementClicks()">Clicked {{clicks()}} times</button></article>
  <article class="card"><h3>Signals + Computed</h3><button class="btn primary" (click)="improveScore()">Improve Score</button><p>Score: {{score()}}</p><p>Status: {{scoreStatus()}}</p></article>
  <article class="card"><h3>Built-in Control Flow</h3>@if(score() >= 80){<p class="success">Great progress!</p>} @else {<p class="warn">Keep practicing.</p>} @for(topic of topics; track topic){<span class="pill">{{topic}}</span>}</article>
  <article class="card"><h3>Class & Style Binding</h3><p [class.success]="score() >= 80" [style.fontWeight]="score() >= 80 ? '800' : '500'">Dynamic style based on signal value.</p></article>
</section>` })
export class LearningLabComponent {
  name = 'Shiva';
  clicks = signal(0);
  score = signal(60);
  scoreStatus = computed(() => this.score() >= 80 ? 'Advanced' : 'Learning');
  topics = ['Binding', 'Signals', 'Control Flow', 'Events', 'Styles'];

  incrementClicks(): void {
    this.clicks.update(value => value + 1);
  }

  improveScore(): void {
    this.score.update(value => Math.min(value + 10, 100));
  }
}
