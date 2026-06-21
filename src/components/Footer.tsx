import { Link } from 'react-router-dom';
import { CONTACT_EMAIL } from '../lib/site.js';
import { Logo } from './Logo.js';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <Logo tone="dark" className="text-3xl" />
        </div>
        <div className="flex flex-col gap-3 text-sm sm:items-end">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-foreground transition-colors hover:text-accent"
          >
            {CONTACT_EMAIL}
          </a>
          <div className="flex items-center gap-5 text-muted-foreground">
            <Link to="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
          </div>
          <span className="text-muted-foreground">© {year} TwentyEleven</span>
        </div>
      </div>
    </footer>
  );
}
