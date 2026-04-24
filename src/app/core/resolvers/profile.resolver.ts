import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Profile } from '../models/portfolio.models';
import { ProfileService } from '../services/profile.service';

export const profileResolver: ResolveFn<Profile> = () => inject(ProfileService).getProfile();
