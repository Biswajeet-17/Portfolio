import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string;
  current: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  experiences: Experience[] = [
    {
      id: '1',
      company: 'LnP Infotech',
      position: 'Software Engineer',
      startDate: '2025-04',
      endDate: null,
      current: true,
      description: `Supporting development and maintenance of web applications using .NET technologies while directly working under the project manager. Handling client communications and managing a team of 1 to 3 members. Improved system reliability by 15% through efficient bug tracking and Agile collaboration.`
    },
    {
      id: '2',
      company: 'Expert IT Brains',
      position: 'Dot Net Developer',
      startDate: '2025-01',
      endDate: '2025-04',
      current: false,
      description: 'Developed and maintained web applications using .NET technologies. Assisted in debugging, performance tuning, and contributed to client-focused feature enhancements.'
    },
    {
      id: '3',
      company: 'Vineforce IT Services',
      position: 'Software Developer',
      startDate: '2024-04',
      endDate: '2025-01',
      current: false,
      description: 'Resolved 100+ production bugs and implemented new features across projects using Java and Python. Improved performance by 30% and user satisfaction by 25% through collaborative Agile practices.'
    }
  ];

  formatDate(dateString: string | null): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  }
}
