import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { products } from '../data/products.js';
import { fadeUp, inView, stagger } from '../lib/anim.js';

/**
 * The product family on the home page.
 * Feedu is shown as a clean image card linking to its detailed product page.
 * The placeholder "in the making" card sells the one-product-today, more-to-come vision.
 */
export function Products() {
  const feedu = products.find((p) => p.slug === 'feedu');

  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <motion.div variants={stagger} {...inView}>
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> The portfolio
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-5xl"
        >
          What we&rsquo;re building.
        </motion.h2>
      </motion.div>

      <motion.div
        variants={stagger}
        {...inView}
        className="mt-10 grid gap-5 sm:grid-cols-2"
      >
        {/* Feedu — landing image card */}
        {feedu && (
          <motion.div variants={fadeUp}>
            <Link
              to={`/products/${feedu.slug}`}
              className="group relative block overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <img
                src="/feedu_landing.png"
                alt="Feedu — the operating system for modern restaurants"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {/* Hover overlay — name + redirect icon */}
              <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/60 via-black/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-6">
                <h3 className="font-display text-lg font-semibold tracking-tight text-white">{feedu.name}</h3>
                <ArrowUpRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
