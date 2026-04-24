import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
@Component({selector:'app-resume',standalone:true,imports:[SectionHeaderComponent],templateUrl:'./resume.component.html',styleUrl:'./resume.component.scss'})
export class ResumeComponent { data=inject(PortfolioDataService); }
