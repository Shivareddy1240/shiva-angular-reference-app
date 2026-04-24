import { Component, input } from '@angular/core';
import { Experience } from '../../../core/models/portfolio.models';
@Component({selector:'app-timeline',standalone:true,templateUrl:'./timeline.component.html',styleUrl:'./timeline.component.scss'})
export class TimelineComponent { items=input.required<Experience[]>(); }
