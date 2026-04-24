import { Injectable } from '@angular/core';
import { Experience, Profile } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  readonly profile: Profile = {
    name: 'Shiva Mudhireddy',
    role: 'Full Stack Developer | Angular | .NET | Flutter Enthusiast',
    location: 'India',
    email: 'shiva@example.com',
    summary: 'I build practical products, learning apps, developer tools, and clean reference solutions with strong UI and architecture.',
    highlights: ['Clean Architecture', 'Modern Angular', 'Reusable UI', 'Developer Education']
  };

  readonly experience: Experience[] = [
    { company: 'Personal Labs', role: 'Product Builder', period: '2024 - Present', points: ['Built multiple Flutter and .NET app concepts', 'Created educational LinkedIn content', 'Focused on reusable starter architectures'] },
    { company: 'Enterprise Projects', role: 'Full Stack Developer', period: 'Earlier', points: ['Worked with APIs, databases, UI flows and application architecture', 'Improved code readability and maintainability'] }
  ];

  getProfile(): Profile { return this.profile; }
  getExperience(): Experience[] { return this.experience; }
}
