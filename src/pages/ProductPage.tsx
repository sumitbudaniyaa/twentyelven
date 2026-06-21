import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  QrCode,
  ChefHat,
  Users,
  LayoutDashboard,
  CreditCard,
  BarChart3,
} from 'lucide-react';
import { getProduct } from '../data/products.js';
import { fadeUp, inView, stagger } from '../lib/anim.js';
import { BrowserFrame } from '../components/BrowserFrame.js';
import { PhoneFrame } from '../components/PhoneFrame.js';
import { Logo } from '../components/Logo.js';
import { Footer } from '../components/Footer.js';

/** Richer feature data with icons and descriptions for the product page. */
const FEATURES = [
  {
    icon: QrCode,
    title: 'QR ordering',
    desc: 'Guests scan a QR code at their table to browse the menu, place orders, and pay — no app download required.',
  },
  {
    icon: ChefHat,
    title: 'Kitchen display',
    desc: 'Orders flow in real time to the kitchen screen, prioritised and colour-coded so nothing gets missed.',
  },
  {
    icon: Users,
    title: 'Waiter floor',
    desc: 'Staff see live table status, can take orders on the fly, and get notified the moment food is ready.',
  },
  {
    icon: LayoutDashboard,
    title: 'Owner dashboard',
    desc: 'Revenue, top dishes, peak hours, staff performance — everything an owner needs, updated live.',
  },
  {
    icon: CreditCard,
    title: 'Payments & loyalty',
    desc: 'Integrated payments with automatic loyalty tracking. Guests earn rewards without a separate app.',
  },
  {
    icon: BarChart3,
    title: 'Multi-branch analytics',
    desc: 'Compare performance across locations with unified reports, spot trends, and make data-driven decisions.',
  },
];

export function ProductPage() {
  const { slug } = useParams();
  const product = slug ? getProduct(slug) : undefined;

  // Scroll to top on mount so navigating from a card lands at the page top.
  useEffect(() => window.scrollTo(0, 0), []);

  if (!product) return <Navigate to="/" replace />;

  const liveHost = product.url.replace(/^https?:\/\//, '');
  const visitCta = (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      Visit {liveHost}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );

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

      <main className="mx-auto max-w-5xl px-5 pb-24 pt-12 sm:px-8 sm:pt-20">
        {/* ── Hero intro ───────────────────────────────────── */}
        <motion.div variants={stagger} {...inView} className="max-w-2xl">
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <img
              src={product.logo}
              alt={`${product.name} logo`}
              className="h-11 w-11 rounded-xl object-contain"
            />
            <span className="inline-flex items-center gap-1.5 rounded-full bg-success/12 px-2.5 py-1 text-xs font-medium text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" /> Live
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display mt-7 text-5xl font-semibold leading-[1.04] tracking-tight sm:text-7xl"
          >
            {product.name}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-xl font-medium text-foreground/90 sm:text-2xl"
          >
            {product.tagline}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {product.description}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9">
            {visitCta}
          </motion.div>
        </motion.div>

        {/* ── Landing screenshot ───────────────────────────── */}
        {product.shot && (
          <motion.div variants={fadeUp} {...inView} className="mt-16 sm:mt-20">
            <BrowserFrame
              src={product.shot}
              alt={`${product.name} landing page`}
              label={liveHost}
            />
          </motion.div>
        )}

        {/* ── How it works ─────────────────────────────────── */}
        <motion.div variants={stagger} {...inView} className="mt-24 border-t border-border pt-14 sm:mt-32">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> How it works
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            One scan connects the entire restaurant.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            A guest scans a QR code at their table. That single scan triggers a chain — the order
            appears on the kitchen display, the waiter&rsquo;s floor view updates, payment processes
            automatically, loyalty points accrue, and the owner sees it all on a real-time dashboard.
            No app installs. No friction. Just one connected system replacing a dozen disconnected tools.
          </motion.p>
        </motion.div>

        {/* ── Dashboard + App screenshots ──────────────────── */}
        <motion.div variants={stagger} {...inView} className="mt-20">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> The product
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Two sides of the same system.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground"
          >
            The owner dashboard gives you full control — revenue, analytics, menu management, and staff
            oversight. The guest app lets diners browse, order, and pay from their phone the moment they
            sit down. Both run in real time on the same backend.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-12 grid items-end gap-10 lg:grid-cols-[1.7fr_1fr]"
          >
            {/* Admin dashboard in a browser frame */}
            {product.dashboard && (
              <div>
                <BrowserFrame
                  src={product.dashboard}
                  alt="Feedu owner dashboard — revenue, analytics, menu and staff management"
                  label="app.feedu.in"
                />
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Owner dashboard — real-time revenue, order tracking, and staff management
                </p>
              </div>
            )}

            {/* Guest app in a phone frame */}
            {product.app && (
              <div>
                <PhoneFrame
                  src={product.app}
                  alt="Feedu guest ordering app — browse menu, order, and pay from your phone"
                />
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Guest app — scan, browse, order, pay
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* ── Features grid ────────────────────────────────── */}
        <motion.div variants={stagger} {...inView} className="mt-24 border-t border-border pt-14 sm:mt-32">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> What&rsquo;s inside
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Everything a restaurant needs.
          </motion.h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="card-elevated rounded-2xl p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-4 text-base font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Built for ────────────────────────────────────── */}
        <motion.div variants={stagger} {...inView} className="mt-24 border-t border-border pt-14 sm:mt-32">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Built for
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            From single cafés to multi-branch chains.
          </motion.h2>
          <div className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {[
              'Dine-in restaurants',
              'Quick-service & fast-casual',
              'Multi-branch chains',
              'Cloud kitchens',
              'Cafés & bakeries',
              'Food courts',
            ].map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="flex items-center gap-3 border-b border-border/60 pb-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-base text-foreground/90">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Closing CTA ──────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          {...inView}
          className="card-elevated mt-20 flex flex-col items-start gap-6 rounded-2xl p-8 sm:mt-28 sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              See {product.name} in action.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The live product, running in real time at {liveHost}.
            </p>
          </div>
          {visitCta}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
