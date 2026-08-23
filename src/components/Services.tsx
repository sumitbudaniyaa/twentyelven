import { motion } from 'framer-motion';
import { Globe, Smartphone, Check } from 'lucide-react';
import { fadeUp, inView, stagger } from '../lib/anim.js';

/** Service offerings — also a key SEO content block for the home page. */
const SERVICES = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Fast, scalable web apps built with modern stacks — React, TypeScript and Node. From marketing sites to full SaaS platforms.',
    points: ['SaaS & web applications', 'E-commerce & booking systems', 'APIs, dashboards & CMS builds'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Beautiful, reliable mobile apps for iOS and Android that people love to use every day.',
    points: ['iOS & Android apps', 'Cross-platform (React Native)', 'App store launch & support'],
  },
];

/**
 * The services offered alongside the product family.
 * Rendered on the home page between the portfolio and the footer.
 */
export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8 sm:pb-40">
      <motion.div variants={stagger} {...inView}>
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Our services
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-5xl"
        >
          We build software for you, too.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-2xl text-muted-foreground"
        >
          Beyond our own products, we design and develop custom software for
          clients — the same craft and care we put into everything we ship.
        </motion.p>
      </motion.div>

      <motion.div
        variants={stagger}
        {...inView}
        className="mt-12 grid gap-5 md:grid-cols-2"
      >
        {SERVICES.map((s) => (
          <motion.div
            key={s.title}
            variants={fadeUp}
            className="card-elevated rounded-2xl p-8"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <s.icon className="h-6 w-6" />
            </span>
            <h3 className="font-display mt-5 text-xl font-semibold tracking-tight">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <ul className="mt-5 space-y-2.5">
              {s.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-foreground/90">
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
