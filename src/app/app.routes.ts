import { Routes } from '@angular/router';
import { portfolioResolver } from './core/resolvers/portfolio.resolver';
import { demoGuard } from './core/guards/demo.guard';
export const routes: Routes = [
 { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent), resolve: { profile: portfolioResolver } },
 { path: 'about', loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent) },
 { path: 'experience', loadComponent: () => import('./features/experience/experience.component').then(m => m.ExperienceComponent) },
 { path: 'projects', loadComponent: () => import('./features/projects/projects.component').then(m => m.ProjectsComponent) },
 { path: 'skills', loadComponent: () => import('./features/skills/skills.component').then(m => m.SkillsComponent) },
 { path: 'certifications', loadComponent: () => import('./features/certifications/certifications.component').then(m => m.CertificationsComponent) },
 { path: 'blogs', loadComponent: () => import('./features/blogs/blogs.component').then(m => m.BlogsComponent) },
 { path: 'angular-lab', loadComponent: () => import('./features/angular-lab/angular-lab.component').then(m => m.AngularLabComponent) },
 { path: 'dashboard', canActivate: [demoGuard], loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
 { path: 'notes', loadComponent: () => import('./features/notes/notes.component').then(m => m.NotesComponent) },
 { path: 'contact', loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent) },
 { path: 'resume', loadComponent: () => import('./features/resume/resume.component').then(m => m.ResumeComponent) },
 { path: '**', loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent) }
];
