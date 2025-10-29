export interface ProjectLink {
  github?: string;
  demo?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  status: string;
  statusColor: string;
  tags: string[];
  links: ProjectLink;
}

export const projects: Project[] = [
  {
    title: 'PHISHIFIED - Phishing Simulation Suite',
    description:
      'A 360 Degree platform to organize and manage phishing campaigns to analyse employee awareness to phishing attacks.',
  image: '/images/site/phishified.webp',
    status: 'Ongoing',
    statusColor: 'bg-cyber-green',
    tags: ['Python','Django', 'Phishing Training', "Employee Awareness"],
    links: {
      github: 'https://github.com/AnamayMishraa/Phishified-Phishing-Simulation-Suite',
      demo: '',
    },
  },
  {
    title: 'Silly Putty Malware Analyses',
    description:
      'SillyPutty Malware Analysis involved conducting in-depth static and dynamic examination of the SillyPutty malware sample to understand its behavior, persistence mechanisms, and payload execution. The analysis focused on identifying its C2 communication, obfuscation techniques, and indicators of compromise, providing insights into how such loaders operate within Windows environments.',
  image: '/images/site/sillyputty.webp',
    status: 'Archived',
    statusColor: 'bg-cyber-cyan',
    tags: ['Malware Analyses', 'Behavioural Analyses', 'Static Analyses', 'Dynamic Analyses'],
    links: {
      github: 'https://github.com/AnamayMishraa/SillyPutty-MalwareAnalysesFindingsReport',
    },
  },
  {
    title: 'Invisilogger - Simple Python Keylogger',
    description:
      'A simple Python-based keylogger designed for educational and ethical cybersecurity learning. It records keystrokes locally to demonstrate how keylogging works at a fundamental level and how such behavior can be detected and mitigated during security assessments. Built to enhance understanding of malware behavior and defense mechanisms.',
  image: '/images/projects/keylog.webp',
    status: 'Completed',
    statusColor: 'bg-cyber-green',
    tags: ['Python', 'Keylogging'],
    links: {
      github: 'https://github.com/AnamayMishraa/Invisilogger-Advance-Keylogger',
      demo: '',
    },
  },
  // {
  //   title: 'Blue Team Security Portfolio',
  //   description:
  //     'Professional cybersecurity portfolio template with integrated blog system using MDX, modern Next.js architecture, and responsive design. Features technical articles on threat hunting, SIEM operations, incident response, and security operations with optimized static rendering and security-hardened configuration.',
  //   image: 'current-site',
  //   status: 'Production',
  //   statusColor: 'bg-cyber-green',
  //   tags: ['Next.js', 'MDX Blog', 'TypeScript', 'Security', 'SSG', 'Responsive'],
  //   links: {
  //     github: 'https://github.com/yourusername/portfolio',
  //   },
  // },
];
