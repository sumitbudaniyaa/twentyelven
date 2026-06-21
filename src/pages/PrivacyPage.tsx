import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Logo } from '../components/Logo.js';
import { Footer } from '../components/Footer.js';
import { CONTACT_EMAIL } from '../lib/site.js';

export function PrivacyPage() {
  useEffect(() => window.scrollTo(0, 0), []);

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
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">Last updated: June 2026</p>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-foreground/80">
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">1. Introduction</h2>
            <p className="mt-4">
              At TwentyEleven, we build products that make everyday work effortless. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and look after your personal data when you visit our website or use our products like Feedu.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">2. The data we collect</h2>
            <p className="mt-4">
              We may collect, use, store and transfer different kinds of personal data about you, including:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">3. How we use your data</h2>
            <p className="mt-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">4. Data security</h2>
            <p className="mt-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. We limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">5. Contact us</h2>
            <p className="mt-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">{CONTACT_EMAIL}</a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
