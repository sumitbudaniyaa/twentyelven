import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { getProduct } from '../data/products.js';
import { fadeUp, inView, stagger } from '../lib/anim.js';
import { BrowserFrame } from './BrowserFrame.js';
import { PhoneFrame } from './PhoneFrame.js';

/** A calm, framed look at the live product — owner dashboard + the guest app, side by side. */
export function Showcase() {
  const feedu = getProduct('feedu');
  if (!feedu) return null;

  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <motion.div variants={stagger} {...inView} className="mx-auto max-w-2xl text-center">
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Product 01 · Live
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          A look at Feedu.
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-muted-foreground">
          {feedu.tagline} One real-time system — from the guest&rsquo;s phone to the owner&rsquo;s
          dashboard.
        </motion.p>
      </motion.div>

      <motion.div variants={fadeUp} {...inView} className="mt-14">
        <Link
          to={`/products/${feedu.slug}`}
          className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
          aria-label="Open the Feedu product page"
        >
          <div className="grid items-end gap-8 lg:grid-cols-[1.7fr_1fr]">
            {feedu.dashboard && (
              <BrowserFrame
                src={feedu.dashboard}
                alt="The Feedu owner dashboard"
                label="app.feedu.in"
                className="transition-transform duration-500 group-hover:-translate-y-1"
              />
            )}
            {feedu.app && (
              <PhoneFrame
                src={feedu.app}
                alt="The Feedu guest ordering app"
                className="transition-transform duration-500 group-hover:-translate-y-1"
              />
            )}
          </div>
        </Link>
        <div className="mt-10 text-center">
          <Link
            to={`/products/${feedu.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
          >
            Explore Feedu
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
