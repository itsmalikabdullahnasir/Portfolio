export interface SocialLink {
  name: 'LinkedIn' | 'GitHub' | 'Email' | 'X';
  url: string;
  color: string;
  handle: string;
}

export const contactEmail = 'itsmalikabdullahnasir@gmail.com';

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/itsmalikabdullahnasir',
    color: 'hover:text-blue-400',
    handle: 'itsmalikabdullahnasir',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/itsmalikabdullahnasir',
    color: 'hover:text-white',
    handle: 'itsmalikabdullahnasir',
  },
  {
    name: 'Email',
    url: `mailto:${contactEmail}`,
    color: 'hover:text-red-400',
    handle: contactEmail,
  },
  {
    name: 'X',
    url: 'https://x.com/itsmalikabdullahnasir',
    color: 'hover:text-foreground',
    handle: '@itsmalikabdullahnasir',
  },
];
