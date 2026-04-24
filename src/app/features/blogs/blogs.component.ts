import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
@Component({selector:'app-blogs',standalone:true,imports:[SectionHeaderComponent],templateUrl:'./blogs.component.html',styleUrl:'./blogs.component.scss'})
export class BlogsComponent { data=inject(PortfolioDataService); }
