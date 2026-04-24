import { Component, input } from '@angular/core';
@Component({selector:'app-feature-demo-card',standalone:true,templateUrl:'./feature-demo-card.component.html',styleUrl:'./feature-demo-card.component.scss'})
export class FeatureDemoCardComponent { feature=input.required<string>(); title=input.required<string>(); description=input(''); }
