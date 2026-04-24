import { Component, input } from '@angular/core';
@Component({selector:'app-empty-state',standalone:true,templateUrl:'./empty-state.component.html',styleUrl:'./empty-state.component.scss'})
export class EmptyStateComponent { title=input('Nothing here yet'); message=input('Try changing your filter or add new sample data.'); }
