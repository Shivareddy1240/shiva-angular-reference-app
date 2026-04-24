import { AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

type Highlight = {
  value: string;
  label: string;
  note: string;
};

type ExpertiseGroup = {
  title: string;
  description: string;
  skills: string[];
};

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  client: string;
  points: string[];
};

type Initiative = {
  title: string;
  status: string;
  description: string;
  tags: string[];
};

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
  logs = signal<string[]>([]);

  readonly highlights: Highlight[] = [
    { value: '9+', label: 'Years Experience', note: 'Enterprise product engineering' },
    { value: '5–10', label: 'Developers Led', note: 'Agile delivery and mentoring' },
    { value: '45%+', label: 'Faster Deployments', note: 'CI/CD and cloud migration impact' },
    { value: '70%+', label: 'Manual Work Reduced', note: 'Monitoring and automation systems' },
    { value: '500K+', label: 'Records / Day', note: 'Healthcare data processing scale' },
    { value: '99.9%', label: 'Uptime Focus', note: 'Reliable enterprise systems' }
  ];

  readonly expertise: ExpertiseGroup[] = [
    {
      title: 'Backend Engineering',
      description: 'Scalable APIs, business services and database-backed enterprise platforms.',
      skills: ['C#', '.NET 8 / .NET 9', 'ASP.NET Core Web API', 'EF Core', 'Dapper', 'LINQ']
    },
    {
      title: 'Frontend Engineering',
      description: 'Modern Angular applications with responsive, reusable and maintainable UI patterns.',
      skills: ['Angular 16+', 'TypeScript', 'Reactive Forms', 'JavaScript', 'HTML5', 'SCSS']
    },
    {
      title: 'Cloud & DevOps',
      description: 'Cloud-native delivery, automation, secure configuration and production monitoring.',
      skills: ['Azure', 'Azure Functions', 'Blob Storage', 'Key Vault', 'Azure DevOps', 'Docker']
    },
    {
      title: 'Architecture & Leadership',
      description: 'Clean architecture, technical leadership and delivery ownership across teams.',
      skills: ['Microservices', 'CQRS', 'SOLID', 'DDD', 'Code Reviews', 'Mentoring']
    }
  ];

  readonly experience: ExperienceItem[] = [
    {
      company: 'Cognizant Technology Solutions',
      role: 'Senior Associate – Projects',
      period: 'Nov 2024 – Present',
      client: 'Optum — Keycap Platform Migration',
      points: [
        'Leading full-stack migration to .NET 8, Angular 16 and Azure cloud architecture.',
        'Architecting scalable microservices with ASP.NET Core Web API and CQRS patterns.',
        'Reduced release cycle from two weeks to three days using Azure DevOps quality gates.',
        'Driving Agile ceremonies and technical delivery for a team of six developers.'
      ]
    },
    {
      company: 'Mphasis Limited',
      role: 'Module Lead',
      period: 'Jul 2023 – Nov 2024',
      client: 'Brown & Brown Insurance / Wells Fargo',
      points: [
        'Delivered secure Angular and Azure-based administrative platforms for insurance workflows.',
        'Integrated Azure Functions, Blob Storage and Key Vault for serverless processing.',
        'Mentored junior developers through code reviews, pairing and architecture workshops.',
        'Modernized legacy financial applications from .NET Framework to .NET Core.'
      ]
    },
    {
      company: 'Capgemini, Zensar & Health Edge',
      role: 'Senior Consultant / Senior Software Engineer / Software Engineer II',
      period: '2017 – 2023',
      client: 'Coca-Cola, Assurant, Healthcare Platforms, Duracell',
      points: [
        'Built real-time delivery order, renters insurance and healthcare claims platforms.',
        'Optimized EF Core and Dapper data access patterns to improve query performance.',
        'Designed healthcare EDI and claims data pipelines processing large operational volumes.',
        'Migrated legacy Web Forms applications to modern ASP.NET MVC and API architectures.'
      ]
    }
  ];

  readonly initiatives: Initiative[] = [
    {
      title: 'Healthcare EDI Parsing Suite',
      status: 'Open Source / Personal',
      description: 'A comprehensive C# NuGet-style parsing suite for major HIPAA X12 5010 transaction types, designed for large batch file processing.',
      tags: ['C#', 'NuGet', 'EDI X12', 'Streaming Parser', 'Automated Tests']
    },
    {
      title: 'MedCodeAI',
      status: 'In Progress',
      description: 'On-premise medical coding automation concept using .NET 9, document ingestion and rule-based NLP for ICD-10-CM and CPT suggestions.',
      tags: ['.NET 9', 'Healthcare', 'NLP', 'ICD-10', 'CPT']
    },
    {
      title: 'Mobile & AI Development',
      status: 'Exploring',
      description: 'Building Flutter-based healthcare and EdTech mobile apps while experimenting with AI-assisted development and prompt engineering.',
      tags: ['Flutter', 'AI', 'Copilot', 'EdTech', 'Healthcare']
    }
  ];

  ngOnInit(): void {
    this.push('ngOnInit: About page initialized with resume-driven portfolio content');
  }

  ngAfterViewInit(): void {
    this.push('ngAfterViewInit: About page view rendered successfully');
  }

  ngOnDestroy(): void {
    console.log('About destroyed');
  }

  private push(value: string): void {
    this.logs.update(items => [...items, value]);
  }
}
