import { Component, input } from '@angular/core';
@Component({selector:'app-code-preview',standalone:true,templateUrl:'./code-preview.component.html',styleUrl:'./code-preview.component.scss'})
export class CodePreviewComponent { code=input.required<string>(); }
