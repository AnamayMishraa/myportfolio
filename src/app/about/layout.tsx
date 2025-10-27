import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'About - Cybersecurity Researcher',
  description: 'Learn about my journey in cybersecurity with Blue Team and Red Teaming Essentials. Combining analytical thinking with practical security implementation for robust attack and defensive strategies.',
  url: '/about',
  type: 'profile',
  image: '/images/about/profile.png',
  tags: ['about', 'cybersecurity professional', 'blue team ', 'red team','Malware Analyses',  'Threat Hunting', 'career' ,'Cybersecurity entry level','transition'],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
