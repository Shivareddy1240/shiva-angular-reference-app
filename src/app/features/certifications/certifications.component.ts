import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
@Component({selector:'app-certifications',standalone:true,imports:[SectionHeaderComponent],templateUrl:'./certifications.component.html',styleUrl:'./certifications.component.scss'})
export class CertificationsComponent { data=inject(PortfolioDataService); }
