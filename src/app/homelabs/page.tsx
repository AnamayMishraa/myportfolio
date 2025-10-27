import type { Metadata } from 'next';
import { Header } from '@/components/layout';
import HomelabsSection from '@/components/pages/Homelabs';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Home Labs - Blue Team Detection & Response Scenarios',
  description: 'Hands-on homelab scenarios designed for SOC analysts and Malware Analysts. Deploy detection pipelines, rehearse incident response, and stress-test defenses end-to-end.',
  url: '/homelabs',
  type: 'website',
  tags: ['homelab', 'blue team lab', 'detection engineering','Malware Analyses', 'incident response lab', 'purple team exercises'],
});

export default function HomelabsPage() {
  return (
    <main className="relative cyber-bg-animated">
      <Header />
      <HomelabsSection />
    </main>
  );
}
