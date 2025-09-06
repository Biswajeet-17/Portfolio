import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Database';
  iconClass: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  public circleLength = 2 * Math.PI * 34;

  skillCategories = [
    {
      name: 'Frontend',
      icon: 'fas fa-desktop',
      skills: [
        { id: '1', name: 'Angular', category: 'Frontend', iconClass: 'fab fa-angular' },
        { id: '2', name: 'TypeScript', category: 'Frontend', iconClass: 'fab fa-js-square' },
        { id: '3', name: 'HTML/CSS', category: 'Frontend', iconClass: 'fab fa-html5' },
        { id: '4', name: 'Bootstrap', category: 'Frontend', iconClass: 'fab fa-bootstrap' }
      ]
    },
    {
      name: 'Backend',
      icon: 'fas fa-server',
      skills: [
        { id: '5', name: 'C#', category: 'Backend', iconClass: 'fas fa-code' },
        { id: '6', name: '.NET Core', category: 'Backend', iconClass: 'fab fa-microsoft' },
        { id: '7', name: 'Entity Framework', category: 'Backend', iconClass: 'fas fa-database' },
        { id: '8', name: 'ASP.NET', category: 'Backend', iconClass: 'fas fa-server' }
      ]
    },
    {
      name: 'Database',
      icon: 'fas fa-database',
      skills: [
        { id: '9', name: 'SQL Server', category: 'Database', iconClass: 'fas fa-database' },
        { id: '10', name: 'MySQL', category: 'Database', iconClass: 'fas fa-server' }
      ]
    },
    {
      name: 'Tools',
      icon: 'fas fa-tools',
      skills: [
        { id: '11', name: 'Visual Studio', category: 'Tools', iconClass: 'fas fa-code' },
        { id: '12', name: 'Git', category: 'Tools', iconClass: 'fab fa-git-alt' },
        { id: '13', name: 'GitHub', category: 'Tools', iconClass: 'fab fa-github' },
        { id: '13', name: 'AWS', category: 'Tools', iconClass: 'fab fa-aws' },
        { id: '14', name: 'Azure', category: 'Tools', iconClass: 'fab fa-microsoft' }
      ]
    }
  ];

}
