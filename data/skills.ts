export interface SkillCategory {
  category: string;
  skills: string[];
  icon: 'code' | 'palette' | 'server' | 'cloud' | 'lock' | 'shield' | 'database' | 'rocket' | 'tool' | 'lightbulb';
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Full Stack Development',
    icon: 'code',
    skills: [
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'Full Stack Architecture',
      'MVC Pattern',
      'Repository Pattern',
    ],
  },
  {
    category: 'Frontend Development',
    icon: 'palette',
    skills: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Responsive Design',
      'UI/UX Implementation',
      'CSS Animations',
      'Web Performance',
    ],
  },
  {
    category: 'Backend Development',
    icon: 'server',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'API Design',
      'Server Architecture',
      'Middleware',
      'Authentication Systems',
    ],
  },
  {
    category: 'ERP & Cloud',
    icon: 'cloud',
    skills: [
      'ERPNext',
      'ERP Implementation',
      'Cloud Deployment',
      'On-Premise Infrastructure',
      'Workflow Customization',
      'Module Configuration',
      'Data Migration',
    ],
  },
  {
    category: 'Cybersecurity',
    icon: 'lock',
    skills: [
      'Security Awareness',
      'Secure Coding',
      'OWASP Principles',
      'Authentication Security',
      'API Security',
      'Infrastructure Security',
      'Penetration Testing Concepts',
    ],
  },
  {
    category: 'Pentesting & Hacking',
    icon: 'shield',
    skills: [
      'Penetration Testing',
      'Ethical Hacking',
      'Vulnerability Assessment',
      'System Hardening',
      'Network Security',
      'Security Testing',
      'Secure Systems Design',
    ],
  },
  {
    category: 'Databases',
    icon: 'database',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Firebase',
      'Database Design',
      'Query Optimization',
      'Data Modeling',
      'Database Security',
    ],
  },
  {
    category: 'Infrastructure & DevOps',
    icon: 'rocket',
    skills: [
      'Docker',
      'Cloud Platforms',
      'Deployment',
      'CI/CD',
      'Server Management',
      'Infrastructure Optimization',
      'System Administration',
    ],
  },
  {
    category: 'Developer Tools',
    icon: 'tool',
    skills: [
      'Git & GitHub',
      'VS Code',
      'npm/pnpm',
      'Postman',
      'Linux',
      'Command Line',
      'Development Workflow',
    ],
  },
  {
    category: 'Soft Skills',
    icon: 'lightbulb',
    skills: [
      'Problem Solving',
      'System Design',
      'Technical Communication',
      'Team Collaboration',
      'Project Management',
      'User Onboarding',
      'Documentation',
    ],
  },
];
