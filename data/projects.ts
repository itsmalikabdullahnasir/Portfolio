export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  image?: string;
  githubLink?: string;
  liveLink?: string;
  yearCompleted?: string;
}

export const projects: Project[] = [
  {
    id: 'dastarkhan-ai',
    title: 'Dastarkhan AI',
    shortDescription: 'AI-powered food delivery platform and alternative to Foodpanda.',
    longDescription:
      'A modern, scalable food delivery platform leveraging AI for intelligent recommendations and personalized user experiences. Built with modern architecture and secure payment workflows.',
    features: [
      'AI-powered recommendations',
      'Smart ordering system',
      'Real-time functionality',
      'User & vendor dashboards',
      'Secure payment workflows',
      'Modern scalable architecture',
      'Responsive UI/UX',
    ],
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'TensorFlow',
      'Stripe',
      'WebSockets',
    ],
    yearCompleted: '2023',
    githubLink: '#',
    liveLink: '#',
  },
  {
    id: 'lms-tracker',
    title: 'LMS Tracker',
    shortDescription: 'Assignment management system for Bahria University students.',
    longDescription:
      'An elegant dashboard application that auto-syncs assignments from university LMS with real-time tracking capabilities and full dark mode support.',
    features: [
      'Auto-sync assignments from university LMS',
      'Elegant dashboard',
      'Real-time assignment tracking',
      'Authentication system',
      'Responsive design',
      'Full dark mode support',
      'Chrome extension support',
    ],
    technologies: ['React', 'TypeScript', 'Firebase', 'Chrome API', 'Tailwind CSS'],
    yearCompleted: '2023',
    githubLink: 'https://lnkd.in/dDhtF6G9',
    liveLink: '#',
  },
  {
    id: 'evenza',
    title: 'EVENZA',
    shortDescription: 'Modern full-stack event management platform.',
    longDescription:
      'A comprehensive event management solution reinforcing scalable architecture and modern software engineering practices. Features admin and user dashboards with role-based access control.',
    features: [
      'Admin dashboard',
      'User dashboard',
      'CRUD operations',
      'Role-based authentication',
      'Payment tracking',
      'Query management',
      'Fully responsive design',
    ],
    technologies: [
      'React',
      'Express.js',
      'PostgreSQL',
      'Node.js',
      'JWT',
      'Tailwind CSS',
    ],
    yearCompleted: '2023',
    githubLink: '#',
    liveLink: '#',
  },
  {
    id: 'fyp-management',
    title: 'FYP Management System',
    shortDescription: 'University Final Year Project management platform.',
    longDescription:
      'A complex, multi-role system for managing final year projects with secure document management, audit logs, and milestone tracking. Demonstrates scalable backend structure and role-based design.',
    features: [
      'Multi-role system (Student, Supervisor, Coordinator, Admin)',
      'Proposal workflows',
      'Document management',
      'Milestone tracking',
      'Rubric-based evaluations',
      'Notifications system',
      'Audit logs',
      'Role-based access control',
    ],
    technologies: [
      'React',
      'Node.js',
      'PostgreSQL',
      'JWT',
      'File Storage',
      'WebSockets',
    ],
    yearCompleted: '2024',
    githubLink: '#',
    liveLink: '#',
  },
];
