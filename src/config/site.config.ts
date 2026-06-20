/**
 * Site Configuration
 *
 * Central configuration for site-wide metadata, branding, and URLs.
 * ⚠️ IMPORTANT: Update these values with your own information!
 *
 * This is a template - replace all placeholder values with your actual details.
 */

export const siteConfig = {
  /**
   * Site identity and branding
   * Replace with your name and professional details
   */
  name: 'Anamay Mishra - Cybersecurity Researcher',
  codename: 'Tr1N3tra', // Your preferred username/handle
  author: {
    name: 'Anamay Mishra',
    codename: 'Tr1N3tra',
    jobTitle: 'Cybersecurity Researcher ', // Your professional title
    tagline: 'See Beyond the Signal',
    description: 'Cybersecurity Researcher focused on Threat Detection, Malware Analysis, Digital Forensics, and Security Operations. Passionate about understanding adversaries, strengthening defenses, and turning security data into actionable intelligence.',
    organization: 'Cybersecurity',
  },

  /**
   * Site URLs and domains
   * Update with your actual domain
   */
  urls: {
    base: 'https://cybertified.in',
    canonical: 'https://cybertified.in',
  },

  /**
   * Default SEO metadata
   * Customize for better search engine optimization
   */
  seo: {
    title: 'Anamay Mishra - Cybersecurity Professional Portfolio',
    description: 'Professional portfolio showcasing cybersecurity projects, blog posts, and expertise. Specializing in Security Operations, Vulnerability Assessments and Penetration Testing, Malware Analyses and Digital Forensics Investigation.',
    keywords: [
      'cybersecurity',
      'blue team',
      'red team',
      'defensive security',
      'security analyst',
      'SOC analyst',
      'SIEM',
      'incident response',
      'threat hunting',
      'security operations',
      'Anamay Mishra', // Replace with your actual name
    ],
  },

  /**
   * CV/Resume download
   * Place your CV PDF at public/cv/ directory
   */
  cvUrl: '/cv/resume.pdf',

  /**
   * Default OG image
   * Path to your social media preview image (recommended: 1200x630px)
   */
  defaultImage: '/images/site/og-default.png',

  /**
   * Supported languages
   * Add or remove languages as needed
   */
  languages: {
    default: 'en-US',
    supported: ['en-US'], // Add 'pt-BR', 'es-ES', etc. as needed
  },

  /**
   * Theme configuration
   */
  theme: {
    defaultMode: 'dark',
    color: '#0a1929', // Your brand color in hex
  },

  /**
   * Educational background
   * Update with your actual educational institutions
   */
  education: [
    {
      name: 'Dr. A.P.J Abdul Kalam Technical University Lucknow UP',
      type: 'EducationalOrganization',
    },
    // Add more education entries as needed
  ],

  /**
   * Areas of expertise
   * List your key skills and specializations
   */
  expertise: [
    'Cybersecurity',
    'Blue Team Operations',
    'SIEM',
    'Incident Response',
    'Threat Hunting',
    'Security Operations Center',
    'Defensive Security',
    'Red Team Operations',
    'Vulnerability Analyses',
    'Phishing Analyses',
    'Malware Analyses',
  ],
} as const;

export type SiteConfig = typeof siteConfig;
