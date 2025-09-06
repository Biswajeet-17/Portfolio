import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  featured: boolean;
  challenges?: string[];
  features?: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  selectedProject: Project | null = null;
  showModal = false;

  ngOnInit(): void {
    // Component initialization
  }

  openProjectModal(project: Project): void {
    this.selectedProject = project;
    this.showModal = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeProjectModal(): void {
    this.showModal = false;
    this.selectedProject = null;
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  projects: Project[] = [
    {
      id: '1',
      title: 'Insurance Management System',
      description: 'Comprehensive insurance policy management platform with real-time updates, claims processing, and seamless team collaboration.',
      detailedDescription: 'An insurance management platform built with Angular and .NET Core, offering policy creation, claims processing, real-time notifications via SignalR, document management, role-based access control, and integration with external insurance APIs.',
      techStack: ['Angular', 'Redis', '.NET Core', 'MS-SQL', 'Bootstrap'],
      githubUrl: 'https://github.com/Biswajeet-17',
      liveUrl: 'https://your-live-insurance-url.com',
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80',
      featured: true,
      challenges: [
        'Implementing complex insurance workflows',
        'Third-party API integrations',
        'Data security and compliance',
        'User-friendly UI for complex tasks'
      ],
      features: [
        'Policy creation and management',
        'Claims tracking',
        'CRM functionalities',
        'Real-time notifications',
        'Document management',
        'Advanced reporting',
        'API integrations'
      ]
    },
    {
      id: '2',
      title: 'Digital Identity & Access Management Platform',
      description: 'A cybersecurity solution providing secure user authentication, multi-factor authentication, and role-based access control.',
      detailedDescription: 'Developed a robust digital identity and access management platform focused on enhancing security through multi-factor authentication, secure login workflows, and fine-grained access controls. The system integrates with various APIs for seamless authentication and user management, ensuring compliance with security standards and protecting sensitive data.',
      techStack: ['Angular', '.NET Core', 'JWT', 'MS-SQL'],
      githubUrl: 'https://github.com/Biswajeet-17',
      liveUrl: 'https://duokey.com/products',
      imageUrl: './assets/images/cyber-security.webp',
      featured: true,
      challenges: [
        'Implementing secure multi-factor authentication flows',
        'Ensuring scalability and reliability of authentication services',
        'Integrating with external identity providers',
        'Maintaining compliance with security standards'
      ],
      features: [
        'User authentication and authorization',
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Integration with OpenID Connect',
        'Audit logging and compliance tracking'
      ]
    },
    {
      id: '3',
      title: 'Taxi Booking & Management Platform',
      description: 'Real-time taxi dispatch platform with GPS tracking, fare calculation, driver/passenger apps, and admin dashboard.',
      detailedDescription: 'A ride-hailing platform with Angular frontend and .NET Core backend, including real-time GPS tracking, automated driver dispatch, payment processing, and comprehensive analytics for fleet management.',
      techStack: ['Angular', '.NET Core', 'JWT', 'MS-SQL'],
      githubUrl: 'https://github.com/Biswajeet-17',
      liveUrl: 'https://your-live-taxi-url.com',
      imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1000&q=80',
      featured: false,
      challenges: [
        'Implementing real-time GPS tracking',
        'Fare calculation optimization',
        'Managing concurrent bookings',
        'Payment security'
      ],
      features: [
        'GPS tracking',
        'Automated dispatch',
        'Fare/payment processing',
        'Driver/passenger apps',
        'Admin dashboard',
        'Notifications',
        'Analytics',
        'Multi-language support'
      ]
    },
    {
      id: '4',
      title: 'Women Safety Device using IoT',
      description: 'IoT device for women safety with fall detection, emergency alerts, and deterrence features.',
      detailedDescription: 'Designed and developed an IoT-powered women safety device featuring fall detection, instant SOS alerts with location, and buzzers to deter potential threats. Provides real-time location sharing and quick emergency response to enhance safety.',
      techStack: ['C Programming', 'IoT', 'Embedded Systems'],
      githubUrl: 'https://github.com/Biswajeet-17',
      liveUrl: '',
      imageUrl: './assets/images/womensafety.webp',
      featured: false,
      challenges: [
        'Implementing reliable fall detection',
        'Real-time alert system',
        'Hardware and software integration'
      ],
      features: [
        'Fall detection alerts',
        'Discreet emergency triggers',
        'Buzzer deterrence'
      ]
    },
    {
      id: '5',
      title: 'Inventory Management System',
      description: 'A project developed to efficiently manage inventory using Java and database connectivity.',
      detailedDescription: 'Created an inventory management system using Java Database Connectivity (JDBC) for managing stock levels, orders, and product data efficiently. The system aims to streamline inventory operations and reduce manual errors.',
      techStack: ['Java', 'JDBC', 'DBMS'],
      githubUrl: 'https://github.com/Biswajeet-17',
      liveUrl: '',
      imageUrl: './assets/images/inventory-management.jpg',
      featured: false,
      challenges: [
        'Managing database connections',
        'Designing user-friendly interface',
        'Ensuring data integrity'
      ],
      features: [
        'Stock management',
        'Order tracking',
        'Database integration'
      ]
    },
    {
      id: '6',
      title: 'Face Recognition Based Attendance System',
      description: 'Attendance system using face recognition and KNN algorithm for automatic student attendance marking.',
      detailedDescription: 'Developed a face recognition attendance system that uses the K-Nearest Neighbors (KNN) algorithm to automatically detect and mark student attendance, improving accuracy and reducing manual errors.',
      techStack: ['Python', 'OpenCV', 'KNN Algorithm', 'DBMS'],
      githubUrl: 'https://github.com/Biswajeet-17',
      liveUrl: '',
      imageUrl: './assets/images/face-recognition-automatic-attendance-system.png',
      featured: false,
      challenges: [
        'Implementing accurate face detection and recognition',
        'Handling variations in lighting and angles',
        'Optimizing KNN algorithm for performance'
      ],
      features: [
        'Automated attendance marking',
        'Face recognition using KNN',
        'Database integration for record keeping'
      ]
    },
    {
      id: '7',
      title: 'Chatbot for College Website',
      description: 'Interactive chatbot to answer questions related to college academics and administration.',
      detailedDescription: 'Built a chatbot integrated into the college MCA department website to provide answers to queries about academics, administration, and other college-related topics using NLP techniques and Flask backend.',
      techStack: ['Python', 'Flask', 'NLP', 'HTML5', 'CSS'],
      githubUrl: 'https://github.com/Biswajeet-17',
      liveUrl: '',
      imageUrl: './assets/images/chatbot.jpg',
      featured: false,
      challenges: [
        'Implementing NLP for understanding queries',
        'Designing conversational flow',
        'Integrating frontend and backend'
      ],
      features: [
        'Query processing with NLP',
        'Interactive UI',
        'Backend integration with Flask'
      ]
    }
  ];
}
