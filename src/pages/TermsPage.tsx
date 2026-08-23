import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Logo } from '../components/Logo.js';
import { Footer } from '../components/Footer.js';
import { CONTACT_EMAIL } from '../lib/site.js';
import { useSeo } from '../lib/seo.js';

export function TermsPage() {
  useEffect(() => window.scrollTo(0, 0), []);
  useSeo({
    title: 'Terms of Service | TwentyEleven',
    description:
      'The terms that govern your use of TwentyEleven products and services, including Feedu.',
    path: '/terms',
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" aria-label="TwentyEleven — home">
            <Logo tone="dark" className="text-2xl" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-muted-foreground">Last updated: June 2026</p>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-foreground/80">
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">1. Acceptance of Terms</h2>
            <p className="mt-4">
              By accessing and using TwentyEleven's website and products (such as Feedu), you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">2. Description of Service</h2>
            <p className="mt-4">
              TwentyEleven builds software products. Our flagship product, Feedu, provides a comprehensive operating system for modern restaurants including QR ordering, kitchen displays, and analytics. We reserve the right to modify or discontinue any aspect of our services at any time.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">3. User Conduct</h2>
            <p className="mt-4">
              You agree to use our services only for lawful purposes. You are prohibited from violating or attempting to violate the security of the website or our products, including accessing data not intended for you or logging into a server or account which you are not authorized to access.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">4. Intellectual Property</h2>
            <p className="mt-4">
              All content included on this site, such as text, graphics, logos, images, and software, is the property of TwentyEleven and protected by intellectual property laws. You may not reproduce, duplicate, or copy any material without our permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">5. Contact Information</h2>
            <p className="mt-4">
              Questions about the Terms of Service should be sent to us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">{CONTACT_EMAIL}</a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
