import { Hero } from './Hero.js';
import { Vision } from './Vision.js';
import { Services } from './Services.js';
import { Footer } from './Footer.js';
import { useSeo } from '../lib/seo.js';

export function Home() {
  useSeo({
    title: 'twentyeleven',
    description:
      'TwentyEleven is an Indian product company building SaaS products that solve real problems. Feedu — the restaurant operating system — is our first. We also build custom web & mobile apps.',
    path: '/',
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero includes the scroll-driven "What we're building" (Products) reveal. */}
      <Hero />
      <Vision />
      <Services />
      <Footer />
    </div>
  );
}
