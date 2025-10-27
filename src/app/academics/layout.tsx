import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Education & Certifications - Academic Background',
  description: 'Academic background in Computer Science and Physics. Postgraduate studies in Information Security and Materials Science. Pursuing CompTIA Security+, CEH, BTL1, and GSEC certifications.',
  url: '/academics',
  type: 'profile',
  tags: ['education', 'certifications', 'computer science', 'information security', 'professional development'],
});

export default function AcademicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
