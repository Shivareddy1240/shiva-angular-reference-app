import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { SkillMeterComponent } from '../../shared/components/skill-meter/skill-meter.component';
@Component({selector:'app-skills',standalone:true,imports:[FormsModule,SectionHeaderComponent,SkillMeterComponent],templateUrl:'./skills.component.html',styleUrl:'./skills.component.scss'})
export class SkillsComponent { data=inject(PortfolioDataService); category=signal('All'); selectedCategoryModel='All'; filtered=computed(()=>this.data.skills().filter(s=>this.category()==='All'||s.category===this.category())); }
