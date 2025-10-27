'use client';

import { Header, FloatingNav } from '@/components/layout';
import { Academics as AcademicsSection } from '@/components/pages';

export default function AcademicsPage() {
  return (
  <main className="relative min-h-screen cyber-bg-animated">
      <Header />
      <FloatingNav />
      <AcademicsSection />
    </main>
  );
}
