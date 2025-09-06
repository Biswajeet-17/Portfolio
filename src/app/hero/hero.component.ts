import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  private typingTexts = [
    'Code. Chai. Create. Repeat. ☕',
    'From concept to deployment, I deliver. 🚀',
    'Scalable, robust APIs — built to last. 🔧',
    'Turning logic into impact, line by line. 💡',
    'Designing seamless experiences, not just code. 🎨'
  ];



  currentText = '';
  currentIndex = 0;
  isDeleting = false;

  private texts = [
    'Code. Chai. Create. Repeat. ☕',
    'From concept to deployment, I deliver. 🚀',
    'Scalable, robust APIs — built to last. 🔧',
    'Turning logic into impact, line by line. 💡',
    'Designing seamless experiences, not just code. 🎨'
  ];

  featuredSkills = [
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: '.NET Core', icon: 'fab fa-microsoft' },
    { name: 'TypeScript', icon: 'fab fa-js-square' },
    { name: 'C#', icon: 'fas fa-code' },
    { name: 'SQL Server', icon: 'fas fa-database' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'Azure', icon: 'fab fa-microsoft' },
    { name: 'Git', icon: 'fab fa-git-alt' }
  ];

  /**
   * Array of code-related keywords and logos for animated background.
   * Each item can have a text, an icon, or both.
   */
  animatedKeywords = [
    { text: '.NET', icon: 'fab fa-microsoft' },
    { text: 'Java', icon: 'fab fa-java' },
    { text: 'Angular', icon: 'fab fa-angular' },
    { text: 'Git', icon: 'fab fa-git-alt' },
    { text: 'GitHub', icon: 'fab fa-github' },
    { text: 'SQL', icon: 'fas fa-database' },
    { text: 'TypeScript', icon: 'fab fa-js-square' },
    { text: 'C#', icon: 'fas fa-code' },
    { text: 'Azure', icon: 'fab fa-microsoft' },
    { text: 'HTML5', icon: 'fab fa-html5' },
    { text: 'CSS3', icon: 'fab fa-css3-alt' },
    { text: 'REST API', icon: 'fas fa-plug' }
  ];

  /**
   * For each animated keyword, store a random left position, animation delay, duration, rotation, skew, and color for the rain effect.
   */
  rainStyles: { left: string; delay: string; duration: string; transform: string; color: string; borderColor: string }[] = [];

  private techColors: { [key: string]: string } = {
    '.NET': '#512bd4',
    'Java': '#ea2d2e',
    'Angular': '#dd0031',
    'Git': '#f34f29',
    'GitHub': '#333',
    'SQL': '#00758f',
    'TypeScript': '#3178c6',
    'C#': '#9b4f96',
    'Azure': '#0089d6',
    'HTML5': '#e34c26',
    'CSS3': '#1572b6',
    'REST API': '#f7b731'
  };
  private techBorderColors: { [key: string]: string } = {
    '.NET': '#ffb400',
    'Java': '#00bfff',
    'Angular': '#00e676',
    'Git': '#ffd600',
    'GitHub': '#ff4081',
    'SQL': '#ff1744',
    'TypeScript': '#ff9100',
    'C#': '#00e5ff',
    'Azure': '#ff1744',
    'HTML5': '#00e676',
    'CSS3': '#ffeb3b',
    'REST API': '#512bd4'
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.startTypingEffect();
    // Generate random left positions, delays, durations, transforms, and colors for rain effect
    this.rainStyles = this.animatedKeywords.map((item) => {
      const left = Math.floor(Math.random() * 90) + '%'; // 0% to 90%
      const delay = (Math.random() * 5).toFixed(2) + 's'; // 0s to 5s
      const duration = (24 + Math.random() * 16).toFixed(2) + 's'; // 24s to 40s (ultra slow)
      const rotate = Math.floor(Math.random() * 60 - 30); // -30deg to +30deg
      const skew = Math.floor(Math.random() * 40 - 20); // -20deg to +20deg
      const transform = `rotate(${rotate}deg) skew(${skew}deg)`;
      const color = this.techColors[item.text] || '#888';
      const borderColor = this.techBorderColors[item.text] || '#fff';
      return { left, delay, duration, transform, color, borderColor };
    });
  }

  private startTypingEffect(): void {
    const currentTextIndex = this.currentIndex % this.texts.length;
    const fullText = this.texts[currentTextIndex];

    if (!this.isDeleting) {
      this.currentText = fullText.substring(0, this.currentText.length + 1);

      if (this.currentText === fullText) {
        setTimeout(() => this.isDeleting = true, 2000);
      }
    } else {
      this.currentText = fullText.substring(0, this.currentText.length - 1);

      if (this.currentText === '') {
        this.isDeleting = false;
        this.currentIndex++;
      }
    }

    const speed = this.isDeleting ? 50 : 100;
    setTimeout(() => this.startTypingEffect(), speed);
  }

  navigateToProjects(): void {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigateToContact(): void {
    const el = document.getElementById('contact');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 45; // 160px offset for more space
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

}