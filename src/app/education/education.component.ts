import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Education {
  id: string;
  degree: string;
  institution: string;
  startYear: number;
  endYear: number;
  cgpa?: number;
  percentage?: number;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  educations: Education[] = [
    {
      id: '1',
      degree: 'Master of Computer Applications',
      institution: 'Lovely Professional University',
      startYear: 2022,
      endYear: 2024,
      cgpa: 8.4
    },
    {
      id: '2',
      degree: 'Bachelor of Computer Applications',
      institution: 'Assam Science & Technology University',
      startYear: 2019,
      endYear: 2022,
      cgpa: 8.6
    }
  ];
}
