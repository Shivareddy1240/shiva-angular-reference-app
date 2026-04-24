import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Profile } from '../models/portfolio.models';
import { PortfolioDataService } from '../services/portfolio-data.service';
export const portfolioResolver: ResolveFn<Profile> = () => inject(PortfolioDataService).profile;
