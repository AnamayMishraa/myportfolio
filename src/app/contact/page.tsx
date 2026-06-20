'use client';

import { Header } from '@/components/layout';
import { Contact as ContactSection } from '@/components/pages';

export default function ContactPage() {
  return (
  <main className="relative min-h-screen cyber-bg-animated">
      <Header />
      <ContactSection />
    </main>
  );
}
