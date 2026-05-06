export interface Certification {
  id: string;
  name: string;
  issuer: string;
  credentialUrl: string;
  score?: string;
  dateEarned?: string;
  focus: 'support' | 'project' | 'security' | 'ai' | 'cloud' | 'team';
}

export const certifications: Certification[] = [
  {
    id: 'google-technical-support',
    name: 'Technical Support Fundamentals',
    issuer: 'Google',
    score: '99.20%',
    credentialUrl: 'https://coursera.org/share/0b8882512f7861c5b9edf6d60853e67c',
    focus: 'support',
    dateEarned: '2023',
  },
  {
    id: 'google-project-management',
    name: 'Foundations of Project Management',
    issuer: 'Google',
    score: '95.90%',
    credentialUrl: 'https://coursera.org/share/45837501a4a01d9b7f18884dda456c81',
    focus: 'project',
    dateEarned: '2023',
  },
  {
    id: 'google-cybersecurity',
    name: 'Foundations of Cybersecurity',
    issuer: 'Google',
    score: '95.05%',
    credentialUrl: 'https://coursera.org/share/8b660ae587af63adee6573bb6169f7da',
    focus: 'security',
    dateEarned: '2023',
  },
  {
    id: 'google-ai-essentials',
    name: 'Google AI Essentials',
    issuer: 'Google',
    credentialUrl: 'https://coursera.org/share/7afcf43dc6690a948b8c8a5c90739553',
    focus: 'ai',
    dateEarned: '2024',
  },
  {
    id: 'microsoft-azure-api',
    name: 'Azure API Management Badge',
    issuer: 'Microsoft Learn',
    credentialUrl:
      'https://learn.microsoft.com/api/achievements/share/en-us/itsmalikabdullahnasir/HR2EJPW8?sharingId=DBEFE66C5A79FFF9',
    focus: 'cloud',
    dateEarned: '2024',
  },
  {
    id: 'microsoft-fusion-dev',
    name: 'Fusion Development Teams Badge',
    issuer: 'Microsoft Learn',
    credentialUrl:
      'https://learn.microsoft.com/api/achievements/share/en-us/itsmalikabdullahnasir/HR2EJPW8?sharingId=DBEFE66C5A79FFF9',
    focus: 'team',
    dateEarned: '2024',
  },
];
