import { Component, input } from '@angular/core';
@Component({selector:'app-section-header',standalone:true,templateUrl:'./section-header.component.html',styleUrl:'./section-header.component.scss'})
export class SectionHeaderComponent { eyebrow=input('Section'); title=input.required<string>(); description=input(''); }
