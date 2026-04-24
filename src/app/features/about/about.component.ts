import { AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
@Component({selector:'app-about',standalone:true,imports:[SectionHeaderComponent],templateUrl:'./about.component.html',styleUrl:'./about.component.scss'})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy { logs=signal<string[]>([]); ngOnInit(){this.push('ngOnInit: component initialized')} ngAfterViewInit(){this.push('ngAfterViewInit: view rendered')} ngOnDestroy(){console.log('About destroyed')} private push(v:string){this.logs.update(x=>[...x,v])} }
